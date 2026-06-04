import { useEffect, useState } from 'react'
import styled, { css, keyframes } from 'styled-components'
import { Link } from 'react-router'

const HeadingSizes =  {
  xxxl: css`
  font-size: 4rem;
  line-height: 1.1;
  `,
  xxl: css`
  font-size: 3rem;
  line-height: 1.1;
  `,
  xl: css`
  font-size: 1.9rem;
  line-height: 1.1;
  `,
  l: css`
  font-size: 1.5rem;
  line-height: 1.1;
  `,
  m: css`
  font-size: 1.25rem;
  line-height: 1.1;
  `
}

const BodySizes = {
  l: css`
    font-size: 1.5rem;
  `,
  m: css`
    font-size: 1rem;
  `
}

const HeadingCore = css`
  font-family : ${props => props.theme.fonts.heading};
  font-weight: 600;
  text-decoration: none;
  text-align: center;
  color: ${props => props.theme.text.heading};
  margin: 0;
  &:focus {
    outline: 2px solid ${props => props.theme.interactive};
  }
`

const Heading = styled.h1(props => css`
  ${HeadingCore};
  ${props => HeadingSizes[props.$size]};;
  transform-origin: top;
  opacity: 1;
  max-height: 12rem;
  transform: scaleY(1);
  transition:
    opacity .5s ease,
    max-height .5s ease,
    transform .5s ease;
  ${props => props.$screenReaderOnly && css`
    opacity: 0;
    max-height: 0;
    transform: scaleY(0.85);
    pointer-events: none;
    z-index: -1;
  `};
`)

const Legend  = styled.legend(props => css`
  ${HeadingCore};
  ${props => HeadingSizes[props.$size]};
  break-after: auto;
  margin-bottom: 1rem;
`)

const ExternalLink = styled.a(props => css`
  color: ${props => props.theme.interactive};
  display: inline-block;
  text-decoration: underline;
  text-underline-offset: 0.35rem;
  text-decoration-thickness: 1px;
  text-decoration-style: dashed;
  font-weight: 600;
  &:focus {
    outline: 2px solid ${props => props.theme.interactive};
  }
`)

const InternalLink = styled(Link)(props => css`
  color: ${props => props.theme.interactive};
  text-decoration-style: wavy;
  &:focus {
    outline: 2px solid ${props => props.theme.interactive};
  }
  &:visited {
    color:${props => props.theme.interactive}
  }
`)

const Paragraph = styled.p(props => css`
  font-family: ${props => props.theme.fonts.body};
  font-weight: 350;
  ${props => BodySizes[props.$size] ?? BodySizes.m};
  text-align: center;
  color: ${props => props.theme.text.body};
  line-height: 150%;
  width: ${props => props.$width ?? '80ch'};
  max-width: 100%;
  flex-grow: 1;
  margin: 0;
  padding-left: ${props => props.$leftIndent ?? 'unset'};
  padding-right: ${props => props.$rightIndent ?? 'unset'};
  text-wrap: pretty;
`)

const UnorderedList = styled.ul(props => css`
  font-family: ${props => props.theme.fonts.body};
  font-weight: 350;
  line-height: 125%;
  margin: 0;
  padding-inline-start: 1.5rem;
  display: flex;
  flex-flow: column;
  align-items: center;
  color: ${props => props.theme.text.body};
  text-align: center;
  li + li {
    margin-top: 1rem; 
  }
`)

const DescriptionList = styled.dl(props => css`
  font-family: ${props => props.theme.fonts.body};
  font-weight: 350;
  line-height: 125%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-flow: column;
  align-items: center;
  color: ${props => props.theme.text.body};
  text-align: center;
  gap: 4rem;
`)

const DescriptionWrapper = styled.div(props => css`
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    bottom: -2rem;
    left: 50%;
    transform: translateX(-50%);
    width: 33%;
    border-bottom: 1px solid ${props => props.theme.text.body};
    opacity: 0.5;
  }
  &:last-child::after {
    display: none;
  }
`)

const DescriptionTerm = styled.dt(props => css`
  font-weight: 700;
  font-size: 1.25rem;
`)

const DescriptionDetails = styled.dd(props => css`
  margin: 0;
  font-weight: 350;
`)

const SubText = styled.span(props => css`
  display: block;
  font-size: .85rem;
  margin-top: .75rem;
  color: ${props => props.theme.text.body};
`)

const ScreenReaderOnly = styled.span(props => css`
  position:absolute;  
  left:-10000px;
  top:auto;
  width:1px;
  height:1px;
  overflow:hidden;  
`)

const blinkCursor = keyframes`
  0%, 49% {
    border-right-color: currentColor;
  }

  50%, 100% {
    border-right-color: transparent;
  }
`

const RollingTextViewport = styled.span(props => css`
  display: inline-grid;
  overflow: hidden;
  vertical-align: bottom;
`)

const RollingTextWord = styled.span(props => css`
  display: inline-block;
  white-space: nowrap;
  border-right: 0.12em solid currentColor;
  padding-right: 0.08em;
  animation: ${blinkCursor} 1s steps(1, end) infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    border-right: none;
    padding-right: 0;
  }
`)

const RollingText = ({ terms = [], interval = 2000, typingSpeed = 90, backspaceSpeed = 55, ...props }) => {
  const safeTerms = terms.length ? terms : ['']
  const termsKey = safeTerms.join('|')
  const [index, setIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    setIndex(0)
    setDisplayText('')
    setIsDeleting(false)
  }, [termsKey])

  useEffect(() => {
    const currentTerm = safeTerms[index] ?? ''

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplayText(currentTerm)
      return
    }

    if (safeTerms.length < 2) {
      setDisplayText(currentTerm)
      return
    }

    let timer

    if (!isDeleting && displayText === currentTerm) {
      timer = window.setTimeout(() => {
        setIsDeleting(true)
      }, interval)
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false)
      setIndex(current => (current + 1) % safeTerms.length)
      return
    } else {
      timer = window.setTimeout(() => {
        if (isDeleting) {
          setDisplayText(currentTerm.slice(0, Math.max(0, displayText.length - 1)))
        } else {
          setDisplayText(currentTerm.slice(0, displayText.length + 1))
        }
      }, isDeleting ? backspaceSpeed : typingSpeed)
    }

    return () => window.clearTimeout(timer)
  }, [backspaceSpeed, displayText, index, interval, isDeleting, termsKey, typingSpeed])

  return (
    <RollingTextViewport {...props}>
      <RollingTextWord aria-hidden='true'>
        {displayText}
      </RollingTextWord>
      <ScreenReaderOnly aria-live='polite'>
        {safeTerms[index]}
      </ScreenReaderOnly>
    </RollingTextViewport>
  )
}

export { ExternalLink, Heading, InternalLink, Legend, Paragraph, RollingText, ScreenReaderOnly, UnorderedList, DescriptionList, DescriptionTerm, DescriptionDetails, DescriptionWrapper, SubText }
