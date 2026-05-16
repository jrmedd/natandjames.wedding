import styled, { css, keyframes } from 'styled-components'
import { Legend, ScreenReaderOnly } from './Typography'

String.prototype.camel = function() {
  return this
      .toLowerCase()
      .split(' ')
      .map((word, index) =>
          index === 0
              ? word
              : word.charAt(0).toUpperCase() + word.slice(1)
      )
      .join('')
}

const StyledList = styled.ul(props => css`
  list-style: none;
  margin: 0;
  padding: 0;
  max-width: 100%;
  display: flex;
  flex-flow: row wrap;
  gap: 1rem;
  outline: none;
  border: 0;
`)

const TagOutline = styled.li(props => css`
  position: relative;
  display: block;
  border-radius: .5rem;
  transition: all .3s ease;
  font-weight: ${props => props.$checked ? 900 : 400};
  box-shadow: inset ${props = props.theme.interactive} 0px 0px 0px ${props => props.$checked ? 1: 0}px;
  border: 1px solid ${props => props.theme.interactive};
  background-color: ${props => props.$interactive ? props.theme.interactive : props.theme.background };
  color: ${props => props.$interactive ? props.theme.background : props.theme.interactive};
  margin: 0;
  padding: .5rem 1rem;
  font-size: .8rem;
  cursor: ${props => props.$interactive ? 'pointer' : 'unset'};
`)


const zoom = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`
const StyledCheckbox = styled.input(props => css`
  appearance: none;
  position: absolute;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  margin: 0;
  &:before {
    transform: scale(0);
    transition: all 0.3s ease;
    display: inline-block;
    margin: 0;
    padding-left: .25rem;
    width: 1rem,;
    height: 1rem;
    content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8px' height='8px' fill='none' viewBox='0 0 12 12'%3E%3Cpath stroke='${props => props.theme.background.replace('#', '%23')}' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m1.5 6 3.4 3.8 5.6-7.6'/%3E%3C/svg%3E")
  }
  &:checked:before {
    transform: scale(1);
  }

`)

const StyledLabel = styled.label(props => css`
  position: relative;
`)

export const TagList = props => {
  const checked = props.checked ?? []
  return (
  <StyledList aria-describedby={props.interactive && 'tag-hint'} aria-label={props['aria-label']} as={props.interactive ? 'fieldset' : 'ul'}>
    { props.interactive && <><Legend $size='m'>Tags:</Legend><ScreenReaderOnly id="tag-hint">Select tags to filter projects</ScreenReaderOnly></> }
    {
      props.tags.map((tag, index) => <Tag checked={checked.includes(tag)} onChange={props.onChange} name={props.name} interactive={props.interactive} key={`tag-${index}`} text={tag} />)
    }
  </StyledList>
)
}

export const Tag = props => {
  return (
  <TagOutline $interactive={props.interactive} $checked={props.checked} htmlFor={props.text.camel()} as={props.interactive ? 'label' : 'li'}>
    { props.text }
    { props.interactive  && <StyledCheckbox checked={props.checked} value={props.text} onChange={props.onChange} id={props.text.camel()} type='checkbox' />}
  </TagOutline>
)
}

