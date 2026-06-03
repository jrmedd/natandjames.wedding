const SHEET_NAME = 'Responses';

/**
 * Web app endpoint for RSVP submissions.
 * Expects JSON in the request body with keys:
 * name, email, attending, bringingChildren, numberOfChildren, agesOfChildren, dietaryRequirements, roomAtManchesterHall
 */
function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents || '{}');

    const name = payload.name || '';
    const email = payload.email || '';
    const attending = payload.attending || '';
    const bringingChildren = payload.bringingChildren || '';
    const numberOfChildren = payload.numberOfChildren || '';
    const agesOfChildren = payload.agesOfChildren || '';
    const dietaryRequirements = payload.dietaryRequirements || '';
    const roomAtManchesterHall = payload.roomAtManchesterHall || '';

    const sheet = getOrCreateResponsesSheet_();

    // A: Name, B: Email, C: Attending, D: Bringing Children, E: Number of Children, F: Ages of Children, G: Dietary, H: Manchester Hall
    sheet.appendRow([
      name,
      email,
      attending,
      bringingChildren,
      numberOfChildren,
      agesOfChildren,
      dietaryRequirements,
      roomAtManchesterHall,
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(error) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function getOrCreateResponsesSheet_() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
  }

  if (sheet.getLastRow() === 0) {
    sheet.getRange('A1:H1').setValues([[
      'Name',
      'Email',
      'Attending',
      'Bringing Children',
      'Number of Children',
      'Ages of Children',
      'Dietary Requirements',
      'Manchester Hall',
    ]]);
  }

  return sheet;
}
