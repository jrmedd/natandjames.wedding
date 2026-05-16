import styled, { css } from "styled-components"
import { useEffect, useState } from "react"
import { Stack } from "../components/Layout"
import { Heading, Paragraph, ScreenReaderOnly } from "../components/Typography"
import { Button } from "../components/Button"
import { FormInput } from "../components/FormInputs"

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
    <StyledForm action="POST">
      <FormInput name="name" label="Name(s)" type="text" />
      <FormInput name="email" label="Email address" type="email" />
      <FormInput name="attending" label="Will you be attending?" type="text" />
      <FormInput name="guests" label="How many guests (including yourself)?" type="number" />
      <FormInput name="dietaryRequirements" label="Dietary requirements (if any)" type="text" />
      <Button as='button' type="submit">Submit</Button>
    </StyledForm>
  </Stack>
  )
}
