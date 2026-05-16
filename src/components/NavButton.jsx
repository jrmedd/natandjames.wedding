import styled, { css } from 'styled-components'
import { NavLink } from 'react-router'

const NavButton = styled(NavLink)(props => css`
  border: none;
  font-size: 1rem;
  line-height: 1rem;
  height: fit-content;
  appearance: none;
  font-family: ${props => props.theme.fonts.body};
  font-weight: 500;
  text-align: center;
  padding: .75rem 1rem;
  box-shadow: 0px 2px 0px 0px ${props => props.theme.interactive};
  background: ${props => props.theme.background};
  color: ${props => props.theme.interactive};
  text-decoration: none;
  transition: transform .3s ease;
  &:hover {
    transform: translateY(-.25rem);
  }
  &.active:focus,
  &:focus {
    outline: none;
    transform: translateY(-.25rem);
  }
  &.active {
    font-weight: 800;
    box-shadow: 0px 4px 0px 0px ${props => props.theme.interactive};
    transform: translateY(-.25rem);
  }
`)

export { NavButton }
