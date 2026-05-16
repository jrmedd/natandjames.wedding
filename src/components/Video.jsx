import { useRef, useState } from 'react'
import styled, { css } from 'styled-components'
import { StyledFigure, StyledFigCaption } from './Figure';

const StyledVideo = styled.video(props => css`
  width: 100%;
  border-radius: .25rem;
  position: relative;
`)

const AudioToggle = styled.button(props => css`
  outline: 0;
  cursor: pointer;
  display: block;
  appearance: none;
  border: 0;
  background-color: ${props => props.$active ? props.theme.interactiveShade : props.theme.background};
  font-family: ${props => props.theme.fonts.body};
  color: ${props => props.$active ? props.theme.background : props.theme.interactive};
  transform: scale(${props => props.$active ? '0.9' : '1'});
  box-shadow: 0px 1px 0px 2px ${props => props.theme.interactive};
  padding: .75rem 1rem;
  border-radius: 0.5rem;
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 1rem;
  margin-right: 1rem;
  transition: all .3s ease;
  &:active {
    transform: scale(0.9);
  }
  &:hover {
    transform: scale(1.1);
  }
  &:focus {
    background-color: ${props => props.theme.interactive};
    color: ${props => props.theme.background};
    outline: none;
    transform: scale(1.1);
  }
`)

export const Video = props => {
  const hasAudio = Boolean(props['data-has-audio'])
  const audioControl = useRef(null)
  const [muted, setMuted] = useState(true)
  const toggleAudio = event => {
    event.preventDefault()
    if (audioControl.current !== null) {
      const newState = !audioControl.current.muted
      setMuted(!audioControl.current.muted)
      audioControl.current.muted = newState
    }
  }
  return (
    <StyledFigure>
      <StyledVideo ref={audioControl} playsInline autoPlay loop muted>
        <source src={props.src} type="video/webm" />
        <source src={props.src.replace('webm', 'mp4')} type="video/mp4" />
        Your browser does not support the video tag.
      </StyledVideo>
      {hasAudio && <AudioToggle $active={!muted} onClick={toggleAudio}>Turn video audio { muted ? 'on' : 'off'}</AudioToggle>}
      <StyledFigCaption>
        { props.caption }
      </StyledFigCaption>
    </StyledFigure>
  )
}