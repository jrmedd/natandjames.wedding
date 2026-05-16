import styled, { css } from 'styled-components'

const StyledLabel = styled.label(props => css`
  display: block;
  font-family: ${props => props.theme.fonts.body};
  color: ${props => props.theme.text.body};
  font-size: 1.25rem;
  margin-bottom: 1rem;
`)

const StyledInput = styled.input(props => css`
  display: block;
  width: 100%;
  padding: .5rem;
  font-size: 1rem;
  font-family: ${props => props.theme.fonts.body};
  color: ${props => props.theme.text.body};
  background: none;
  border: none;
  border-radius: .25rem;
  box-shadow: 0 0 0 1px ${props => props.theme.text.body};
  outline: none;
  transition: box-shadow 0.2s ease;
  &:active, &:focus {
    box-shadow: 0 0 0 2px ${props => props.theme.text.body};
  }
`)

export const FormInput = props => (
  <StyledLabel>
    {props.label}
    <StyledInput type={props.type} name={props.name} value={props.value} onChange={props.onChange} />
  </StyledLabel>
) 
