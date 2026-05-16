import { Stack } from "../components/Layout";
import { ExternalLink, Heading, Paragraph, UnorderedList } from "../components/Typography";
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
        <ExternalLink href="https://www.manchesterhall.co.uk/">
          Manchester Hall
        </ExternalLink>{" "}
        on Bridge Street, over the road from MOJO (afterparty anyone?)
      </Paragraph>
      <Heading as="h2" $size="l">
        Getting there
      </Heading>
      <Address>
        Manchester Hall
        <br />
        36 Bridge St
        <br />
        Manchester
        <br />
        M3 3BT
      </Address>
      <Paragraph>
        The venue is just off Deansgate. It's around a 20 minute walk from
        Manchester Piccadilly station, and a 15 minute walk from Manchester
        Victoria station.
      </Paragraph>
      <Paragraph>
        There is an open air car park on{" "}
        <ExternalLink href="https://maps.app.goo.gl/eLLvUpa293iKaucw5">
          {" "}
          Bridge Street
        </ExternalLink>{" "}
        or a multi-storey car park on{" "}
        <ExternalLink href="https://maps.app.goo.gl/XStRfKYLxw8kvr4XA">
          {" "}
          King Street
        </ExternalLink>
        , a short walk from the venue.
      </Paragraph>
      <Heading as="h2" $size="l">
        Accommodation
      </Heading>
      <Paragraph>Hotels near the venue include:</Paragraph>
      <UnorderedList>
        <li>
          <ExternalLink href="https://maps.app.goo.gl/rAr1oHhSU6Jf9crA7">
            Yotel
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://maps.app.goo.gl/nhYMcdkRxm6GB5dXA">
            Moxy
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://maps.app.goo.gl/9n2Zt7sH8h5eLh1bA">
            The Lowry
          </ExternalLink>
        </li>
      </UnorderedList>
      <Paragraph>
        There are also rooms available at Manchester Hall, please let us know
        when you RSVP if you're interested. There are limited limited number of
        rooms available so we can't guarantee there'll be one for everyone, but
        we'll do our best!
      </Paragraph>
    </Stack>
  );
};
