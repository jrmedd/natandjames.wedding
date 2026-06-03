import { Stack } from "../components/Layout"
import { Heading, Paragraph, RollingText } from "../components/Typography"
import { Button } from "../components/Button"
import { LightBox } from "../components/LightBox"


export const Component = props => {
  return (
  <Stack $alignMobile='center' $gap='2rem'>
    <Heading $size='xl' id='career'>
      Gifts
    </Heading>
    <Paragraph>
      Presents aren't necessary, but if you would like to give us a gift, we'd be grateful for contributions towards our honeymoon in <RollingText terms={['Mexico', 'Vietnam', 'Mauritius', 'Madagascar', 'The Maldives', 'Jamaica', 'St. Lucia']} interval={2000} />.
    </Paragraph>
    <Button to='/collection' viewTransition>Honeymoon pot</Button>
    <LightBox src='photo2' />
  </Stack>
  )
}
