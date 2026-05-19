import { useEffect, useState } from "react"

import { Stack } from "../components/Layout"
import { Heading, Paragraph, DescriptionList, DescriptionWrapper, DescriptionTerm, DescriptionDetails, ScreenReaderOnly } from "../components/Typography"


export const Component = props => {
  return (
  <Stack $alignMobile='center' $gap='3.5rem'>
    <Heading $size='xl' id='career'>
      Timings
    </Heading>
    <Paragraph>
      The order of the day will be as follows:
    </Paragraph>
    <DescriptionList $gap='1.5rem'>
      <DescriptionWrapper>
        <DescriptionTerm>11:00</DescriptionTerm>
        <DescriptionDetails>Guests arrive into Derby Bar</DescriptionDetails>
      </DescriptionWrapper>
      <DescriptionWrapper>
        <DescriptionTerm>11:50</DescriptionTerm>
        <DescriptionDetails>Guests seated in Drawing Room</DescriptionDetails>
      </DescriptionWrapper>
      <DescriptionWrapper>
        <DescriptionTerm>12:00</DescriptionTerm>
        <DescriptionDetails>Ceremony begins</DescriptionDetails>
      </DescriptionWrapper>
      <DescriptionWrapper>
        <DescriptionTerm>12:30</DescriptionTerm>
        <DescriptionDetails>Ceremony ends, drinks and canapés in the Club Room</DescriptionDetails>
      </DescriptionWrapper>
      <DescriptionWrapper>
        <DescriptionTerm>14:15</DescriptionTerm>
        <DescriptionDetails>Guests seated in the Gallery for lunch</DescriptionDetails>
      </DescriptionWrapper>
      <DescriptionWrapper>
        <DescriptionTerm>14:30</DescriptionTerm>
        <DescriptionDetails>Lunch begins (with speeches)</DescriptionDetails>
      </DescriptionWrapper>
      <DescriptionWrapper>
        <DescriptionTerm>17:00</DescriptionTerm>
        <DescriptionDetails>Lunch ends, drinks in the Club Room</DescriptionDetails>
      </DescriptionWrapper>
      <DescriptionWrapper>
        <DescriptionTerm>18:00</DescriptionTerm>
        <DescriptionDetails>Evening guests arrive</DescriptionDetails>
      </DescriptionWrapper>
      <DescriptionWrapper>
        <DescriptionTerm>18:30</DescriptionTerm>
        <DescriptionDetails>Evening reception begins</DescriptionDetails>
      </DescriptionWrapper>
      <DescriptionWrapper>
        <DescriptionTerm>18:40</DescriptionTerm>
        <DescriptionDetails>Cake cutting</DescriptionDetails>
      </DescriptionWrapper>
      <DescriptionWrapper>
        <DescriptionTerm>19:00</DescriptionTerm>
        <DescriptionDetails>First dance and band begins</DescriptionDetails>
      </DescriptionWrapper>
      <DescriptionWrapper>
        <DescriptionTerm>19:45</DescriptionTerm>
        <DescriptionDetails>Evening food served</DescriptionDetails>
      </DescriptionWrapper>
      <DescriptionWrapper>
        <DescriptionTerm>21:30</DescriptionTerm>
        <DescriptionDetails>DJ and dancing continues</DescriptionDetails>
      </DescriptionWrapper>
      <DescriptionWrapper>
        <DescriptionTerm>00:30</DescriptionTerm>
        <DescriptionDetails>Last orders</DescriptionDetails>
      </DescriptionWrapper>
      <DescriptionWrapper>
        <DescriptionTerm>01:00</DescriptionTerm>
        <DescriptionDetails>Carriages</DescriptionDetails>
      </DescriptionWrapper>
    </DescriptionList>
  </Stack>
  )
}
