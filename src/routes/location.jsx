import { useEffect, useState } from "react"

import { Stack } from "../components/Layout"
import { Heading, Paragraph, ScreenReaderOnly } from "../components/Typography"


export const Component = props => {
  return (
  <Stack $alignMobile='center' $gap='3.5rem'>
    <Heading $size='l' id='career'>
      Location
    </Heading>
  </Stack>
  )
}
