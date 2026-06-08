import styled from "styled-components";
import { useState } from "react";
import { Stack, HR } from "../components/Layout";
import { Heading, Paragraph, ScreenReaderOnly } from "../components/Typography";
import { Button } from "../components/Button";
import { FormInput, TwoAnswerQuestion } from "../components/FormInputs";

const RSVP_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbySwaxIGyxwybFtyLyeYJR0xToFsqi4qC2-RX2U-7pf0qrOwxW4-3O49BcYnAtEzhoQ/exec";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  & > button {
    align-self: center;
  }
`;

const FollowUpSection = styled.div`
  max-height: ${(props) => (props.$collapsed ? "0" : "100rem")};
  opacity: ${(props) => (props.$collapsed ? 0 : 1)};
  transform: translateY(${(props) => (props.$collapsed ? "-0.5rem" : "0")});
  transition:
    max-height 350ms ease,
    opacity 200ms ease,
    transform 300ms ease;
  pointer-events: ${(props) => (props.$collapsed ? "none" : "auto")};
  overflow-y: hidden;
  padding-inline: 2px;
  padding-bottom: 2px;
  margin-inline: -2px;
  margin-bottom: -2px;
`;

const FollowUpSectionInner = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Component = (props) => {
  const [submittedMessage, setSubmittedMessage] = useState(null);
  const [submitError, setSubmitError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [attendingSelection, setAttendingSelection] = useState(null);
  const [bringingChildren, setBringingChildren] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const attending = formData.get("attending");
    const payload = Object.fromEntries(formData.entries());

    setSubmitError(null);
    setIsSubmitting(true);

    try {
      await fetch(RSVP_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(payload),
      });
    } catch (error) {
      setSubmitError(
        "We couldn't submit your RSVP just now. Please try again.",
      );
      setIsSubmitting(false);
      return;
    }

    setIsSubmitting(false);

    if (attending === "no") {
      setSubmittedMessage(
        "Thank you for your response, sorry you won't be able to make it.",
      );
      return;
    }

    setSubmittedMessage(
      "Thank you for your response, we can't wait to see you.",
    );
  };

  return (
    <Stack $alignMobile="center" $width="100%">
      <Heading $size="xl" id="career">
        RSVP
      </Heading>
      {submittedMessage ? (
        <Paragraph>{submittedMessage}</Paragraph>
      ) : (
        <StyledForm onSubmit={handleSubmit}>
          {submitError ? <Paragraph>{submitError}</Paragraph> : null}
          <FormInput
            autoComplete="name"
            name="name"
            label="Name(s)"
            type="text"
          />
          <FormInput
            autoComplete="email"
            name="email"
            label="Email address"
            type="email"
          />
          <TwoAnswerQuestion
            name="attending"
            label="Will you be attending?"
            options={[
              { label: "Yes", value: "yes" },
              { label: "No", value: "no" },
            ]}
            onChange={(event) => setAttendingSelection(event.target.value)}
          />
          <FollowUpSection $collapsed={attendingSelection === "no"}>
            <FollowUpSectionInner>
              <TwoAnswerQuestion
                name="bringingChildren"
                label="Are you bringing children?"
                hint="We'll do our best to accommodate children, however we are capped at a number of guests for our daytime ceremony and lunch, so we may not have space for everyone."
                options={[
                  { label: "Yes", value: "yes" },
                  { label: "No", value: "no" },
                ]}
                onChange={(event) => setBringingChildren(event.target.value)}
              />
              <FollowUpSection $collapsed={bringingChildren !== "yes"}>
                <FollowUpSectionInner>
                  <FormInput
                    name="numberOfChildren"
                    label="Number of children"
                    type="text"
                  />
                  <FormInput
                    name="agesOfChildren"
                    label="How old will they be on 28th November 2026?"
                    type="text"
                  />
                </FollowUpSectionInner>
              </FollowUpSection>
              <FormInput
                name="dietaryRequirements"
                label="Any dietary requirements?"
                type="text"
              />
              <TwoAnswerQuestion
                name="roomAtManchesterHall"
                label="Would you like a room at Manchester Hall?"
                hint="There are a limited number of rooms available, so we can't guarantee there'll be one for everyone, but we'll do our best!"
                options={[
                  { label: "Yes", value: "yes" },
                  { label: "No", value: "no" },
                ]}
              />
            </FollowUpSectionInner>
          </FollowUpSection>
          {/* <HR /> */}
          <Button as="button" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </StyledForm>
      )}
    </Stack>
  );
};
