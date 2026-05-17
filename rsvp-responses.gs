const SHEET_NAME = 'Responses';

/**
 * Web app endpoint for RSVP submissions.
 * Expects JSON in the request body with keys:
 * name, email, attending, guestType, dietaryRequirements, roomAtManchesterHall
 */
function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents || '{}');

    const name = payload.name || '';
    const email = payload.email || '';
    const attending = payload.attending || '';
    const guestType = payload.guestType || '';
    const dietaryRequirements = payload.dietaryRequirements || '';
    const roomAtManchesterHall = payload.roomAtManchesterHall || '';

    const sheet = getOrCreateResponsesSheet_();

    // A: Name, B: Email, C: Attending, D: Guest Type, E: Dietary, F: Manchester Hall
    sheet.appendRow([
      name,
      email,
      attending,
      guestType,
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
    sheet.getRange('A1:F1').setValues([[
      'Name',
      'Email',
      'Attending',
      'Guest Type',
      'Dietary Requirements',
      'Manchester Hall',
    ]]);
  }

  return sheet;
}
