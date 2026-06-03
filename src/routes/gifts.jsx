import { Stack } from "../components/Layout";
import { Heading, Paragraph, RollingText } from "../components/Typography";
import { Button } from "../components/Button";
import { LightBox } from "../components/LightBox";
import { PayPal, GooglePay, ApplePay } from "../components/PaymentIcons";

export const Component = (props) => {
  return (
    <Stack $alignMobile="center" $gap="2rem">
      <Heading $size="xl" id="career">
        Gifts
      </Heading>
      <Paragraph>
        Presents aren't necessary, but if you would like to give us a gift, we'd
        be grateful for contributions towards our honeymoon in{" "}
        <RollingText
          terms={[
            "Mexico",
            "Vietnam",
            "Mauritius",
            "Madagascar",
            "The Maldives",
            "Jamaica",
            "St. Lucia",
          ]}
          interval={2000}
        />
        .
      </Paragraph>
      <Paragraph>
        You can contribute via PayPal or if you'd prefer to use Google Pay or Apple Pay,
        you can do so via our Starling Bank link below.
      </Paragraph>
      <Button
        aria-label="Contribute via PayPal"
        as="a"
        href="https://www.paypal.com/pool/9pJv8SGBmS?sr=wccr"
      >
        <PayPal />
      </Button>
      <Button
        aria-label="Contribute via Google Pay or Apple Pay on Starling Bank"
        as="a"
        href="https://settleup.starlingbank.com/james-medd-a78413/pay"
      >
        <GooglePay /> <ApplePay />
      </Button>
      <LightBox src="photo2" />
    </Stack>
  );
};
