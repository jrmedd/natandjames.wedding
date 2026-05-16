import styled, { css } from "styled-components"
import { ExternalLink } from "./Typography"

const StyledFooter = styled.footer(props => css`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  color: ${props => props.theme.interactive};
  font-style: italic;
`)

export const Footer = props => (
  <>
  <StyledFooter>
    {/* <ExternalLink href='https://github.com/jrmedd/jamesmedd.co.uk'>This site was built by me in 2024</ExternalLink> */}
  </StyledFooter>
  </>
)
