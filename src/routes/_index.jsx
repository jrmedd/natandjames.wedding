import { useEffect, useState } from 'react'
import { Heading, Paragraph } from '../components/Typography'
import { Button } from '../components/Button'

export const Component = () => (
  <>
    <Heading $size="xxxl">Nat and James</Heading>
    <Button to='/rsvp' viewTransition>RSVP</Button>
    <Paragraph>
      invite you to celebrate their wedding on Saturday 28th November 2026
    </Paragraph>
  </>
)