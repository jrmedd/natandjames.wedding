import { Stack } from "../components/Layout";
import {
  ExternalLink,
  Heading,
  Paragraph,
  UnorderedList,
} from "../components/Typography";
import { Map } from "../components/Map";
import styled from "styled-components";

const Address = styled.address`
  font-style: normal;
  line-height: 150%;
  text-align: center;
  color: ${(props) => props.theme.text.body};
`;

export const Component = (props) => {
  return (
    <Stack $alignMobile="center" $gap="2rem">
      <Heading $size="xl" id="location">
        Location
      </Heading>
      <Map />
      <Paragraph>
        We're getting married at the beautiful{" "}
        <ExternalLink target="_blank" href="https://www.manchesterhall.co.uk/">
          Manchester Hall
        </ExternalLink>{" "}
        on Bridge Street, over the road from MOJO (afterparty anyone?)
      </Paragraph>
      <Heading as="h2" $size="l">
        Getting there
      </Heading>
      <Address>
        Manchester Hall, 36 Bridge St, Manchester, M3 3BT
      </Address>
      <Paragraph>
        The venue is just off Deansgate. It's around a 20-minute walk from
        Manchester Piccadilly station, and a 15-minute walk from Manchester
        Victoria station.
      </Paragraph>
      <Heading as="h2" $size="l">
        Nearby car parks
      </Heading>
      {/* <Paragraph>
        There are a number of car parking options close to the venue:
      </Paragraph> */}
      <UnorderedList>
        <li>
          <ExternalLink
            target="_blank"
            href="https://maps.app.goo.gl/7mMV8hPUepFwUyex5"
          >
            NCP Spinningfields
          </ExternalLink>
        </li>
        <li>
          <ExternalLink
            target="_blank"
            href="https://maps.app.goo.gl/B98Ct4EnqnMSvkt76"
          >
            NCP Salford New Bailey
          </ExternalLink>
        </li>
        <li>
          <ExternalLink
            target="_blank"
            href="https://maps.app.goo.gl/ZJQXyDPVbmVCV5Af8"
          >
            NCP Stanley Street
          </ExternalLink>
        </li>
      </UnorderedList>
      <Heading as="h2" $size="l">
        Nearby hotels
      </Heading>
      {/* <Paragraph>Hotels near the venue include:</Paragraph> */}
      <UnorderedList>
        <li>
          <ExternalLink
            target="_blank"
            href="https://maps.app.goo.gl/rAr1oHhSU6Jf9crA7"
          >
            Yotel
          </ExternalLink>
        </li>
        <li>
          <ExternalLink
            target="_blank"
            href="https://maps.app.goo.gl/nhYMcdkRxm6GB5dXA"
          >
            Moxy
          </ExternalLink>
        </li>
        <li>
          <ExternalLink
            target="_blank"
            href="https://maps.app.goo.gl/9n2Zt7sH8h5eLh1bA"
          >
            The Lowry
          </ExternalLink>
        </li>
        <li>
          <ExternalLink
            target="_blank"
            href="https://maps.app.goo.gl/E5Srs3L36jQYxAcaA"
          >
            Motel One Royal Exchange
          </ExternalLink>
        </li>
      </UnorderedList>
      <Paragraph>
        There are rooms available at Manchester Hall, please let us know
        when you RSVP if you're interested. There are limited rooms available, and we can't guarantee there'll be one for everyone, but
        we'll do our best!
      </Paragraph>
    </Stack>
  );
};
