import styled, { css } from "styled-components"
import { useEffect, useState } from "react"
import { Stack } from "../components/Layout"
import { Heading, Paragraph, ScreenReaderOnly } from "../components/Typography"
import { Button } from "../components/Button"
import { FormInput, TwoAnswerQuestion } from "../components/FormInputs"

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  & > button {
    align-self: center;
  }
`

export const Component = props => {
  return (
  <Stack $alignMobile='center' $gap='3.5rem'>
    <Heading $size='l' id='career'>
      RSVP
    </Heading>
    <StyledForm>
      <FormInput autoComplete='name' name="name" label="Name(s)" type="text" />
      <FormInput autoComplete='email' name="email" label="Email address" type="email" />
      <TwoAnswerQuestion name="attending" label="Will you be attending?" options={[
        { label: 'Yes',  value: 'yes' },
        { label: 'No', value: 'no' }
      ]} />
      <TwoAnswerQuestion name="songRequest" label="Are you a 12PM or a 6PM guest?" options={[
        { label: '12PM',  value: '12pm' },
        { label: '6PM', value: '6pm' }
      ]} />
      <FormInput name="guests" label="How many guests (including yourself)?" type="text" inputMode="numeric" />
      <FormInput name="dietaryRequirements" label="Dietary requirements" type="text" />
      <Button as='button' type="submit">Submit</Button>
    </StyledForm>
  </Stack>
  )
}
