import { useEffect, useState } from "react";

import { Stack } from "../components/Layout";
import {
  Heading,
  Paragraph,
  DescriptionList,
  DescriptionWrapper,
  DescriptionTerm,
  DescriptionDetails,
  ScreenReaderOnly,
  SubText,
} from "../components/Typography";

export const Component = (props) => {
  return (
    <Stack $alignMobile="center" $gap="2rem">
      <Heading $size="xl" id="order-of-the-day">
        Order of the day
      </Heading>
      <DescriptionList>
        <DescriptionWrapper>
          <DescriptionTerm>11:00</DescriptionTerm>
          <DescriptionDetails>
            Guests arrive into Derby Bar{" "}
            <SubText>(Please arrive no later than 11:30)</SubText>
          </DescriptionDetails>
        </DescriptionWrapper>
        <DescriptionWrapper>
          <DescriptionTerm>11:50</DescriptionTerm>
          <DescriptionDetails>Guests seated in Drawing Room</DescriptionDetails>
        </DescriptionWrapper>
        <DescriptionWrapper>
          <DescriptionTerm>12:00 - 12:30</DescriptionTerm>
          <DescriptionDetails>Ceremony</DescriptionDetails>
        </DescriptionWrapper>
        <DescriptionWrapper>
          <DescriptionTerm>12:30</DescriptionTerm>
          <DescriptionDetails>
            Drinks and canapés in the Club Room
          </DescriptionDetails>
        </DescriptionWrapper>
        <DescriptionWrapper>
          <DescriptionTerm>14:15 - 17:00</DescriptionTerm>
          <DescriptionDetails>
           Lunch and speeches in the Gallery
          </DescriptionDetails>
        </DescriptionWrapper>
        <DescriptionWrapper>
          <DescriptionTerm>17:00</DescriptionTerm>
          <DescriptionDetails>
            Drinks in the Club Room
          </DescriptionDetails>
        </DescriptionWrapper>
        <DescriptionWrapper>
          <DescriptionTerm>18:00</DescriptionTerm>
          <DescriptionDetails>Evening guests arrive</DescriptionDetails>
        </DescriptionWrapper>
        <DescriptionWrapper>
          <DescriptionTerm>18:30</DescriptionTerm>
          <DescriptionDetails>Evening reception begins and cake cutting</DescriptionDetails>
        </DescriptionWrapper>
        <DescriptionWrapper>
          <DescriptionTerm>19:00 - 01:00</DescriptionTerm>
          <DescriptionDetails>
            First dance, music, and evening food <SubText>(Last orders at 00:30)</SubText>
          </DescriptionDetails>
        </DescriptionWrapper>
        <DescriptionWrapper>
          <DescriptionTerm>01:00</DescriptionTerm>
          <DescriptionDetails>Venue closes</DescriptionDetails>
        </DescriptionWrapper>
      </DescriptionList>
    </Stack>
  );
};
