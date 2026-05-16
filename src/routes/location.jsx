import { Stack } from "../components/Layout"
import { Heading } from "../components/Typography"
import { Map } from "../components/Map"


export const Component = props => {
  return (
  <Stack $alignMobile='center' $gap='3.5rem'>
    <Heading $size='l' id='career'>
      Location
    </Heading>
    <Map />
  </Stack>
  )
}
