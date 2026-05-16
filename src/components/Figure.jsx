import styled, { css } from 'styled-components'

export const StyledFigure = styled.figure(props => css`
  width: 100%;
  margin: 0;
  margin-bottom: .5rem;
  position: relative;
`)

export const StyledFigCaption = styled.figcaption(props => css`
  font-size: .8rem;  
`)