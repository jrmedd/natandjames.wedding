import styled, { css } from 'styled-components'
import { Link } from 'react-router'

export const SkipLink = styled.a(props => css`
  color: ${props => props.theme.interactive};
  outline: none;
  position:absolute;  
  left:-10000px;
  top:auto;
  width:1px;
  height:1px;
  overflow:hidden; 
  &:focus {
    left: 0;
    width: unset;
    height: unset;
    border: 2px solid ${props => props.theme.interactive};
    padding: 1rem;
    background-color: ${props => props.theme.background};
  }
`)