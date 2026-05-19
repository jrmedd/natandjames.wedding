import { Stack } from "../components/Layout"
import { Heading, Paragraph, RollingText } from "../components/Typography"


export const Component = props => {
  return (
  <Stack $alignMobile='center' $gap='3.5rem'>
    <Heading $size='xl' id='career'>
      Gifts
    </Heading>
    <Paragraph>
      Presents aren't necessary, but if you want to give us a gift, we would be grateful for contributions towards our honeymoon in <RollingText terms={['Mexico', 'Vietnam', 'Mauritius', 'Madagascar', 'The Maldives', 'Jamaica', 'St. Lucia']} interval={2000} />.
    </Paragraph>
  </Stack>
  )
}
