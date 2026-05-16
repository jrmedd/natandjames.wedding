import styled, { css } from 'styled-components'
import { NavLink } from 'react-router'

const Button = styled(NavLink)(props => css`
  border: none;
  font-size: 1.5rem;
  line-height: 1.5rem;
  height: fit-content;
  appearance: none;
  width: fit-content;
  font-family: ${props => props.theme.fonts.body};
  font-weight: 700;
  text-align: center;
  padding: .75rem 1.5rem;
  border-radius: 0.5rem;
  background: ${props => props.theme.interactive};
  color: ${props => props.theme.background};
  text-decoration: none;
  transition: transform .3s ease;
  &:active {
    transform: scale(0.9);
  }
  &:hover {
    transform: scale(1.1);
  }
  &.active:focus,
  &:focus {
    background-color: ${props => props.theme.interactive};
    color: ${props => props.theme.background};
    outline: none;
    transform: scale(1.1);
  }
  &.active {
    background-color: ${props => props.theme.interactiveShade};
    color: ${props => props.theme.background};
    transform: scale(0.9);
  }
`)

export { Button }
