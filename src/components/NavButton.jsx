import styled, { css } from 'styled-components'
import { NavLink } from 'react-router'

const NavButton = styled(NavLink)(props => css`
  border: none;
  font-size: 1rem;
  line-height: 1rem;
  height: fit-content;
  appearance: none;
  font-family: ${props => props.theme.fonts.body};
  font-weight: 700;
  text-align: center;
  padding: .75rem 1rem;
  box-shadow: 0px 2px 0px 0px ${props => props.theme.interactive};
  background: ${props => props.theme.background};
  color: ${props => props.theme.interactive};
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

export { NavButton }
