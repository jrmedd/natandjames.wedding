import { useState } from "react";
import styled, { css } from "styled-components";
import { RectangularImage } from "./RectangularImage";
import { StyledFigCaption, StyledFigure } from "./Figure";

// Styled components
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  cursor: pointer;
  overflow: hidden;
`;

const ImageWrapper = styled.div`
  max-width: 90%;
`;


// Lightbox component
export const Lightbox = props => {
  const [isOpen, setIsOpen] = useState(false);

  const openLightbox = () => setIsOpen(true);
  const closeLightbox = () => setIsOpen(false);

  return (
    <>
    <StyledFigure>
      <RectangularImage src={props.src} alt={props.alt} onClick={openLightbox} />
      <StyledFigCaption>{ props.alt } (press to see the full picture)</StyledFigCaption>
    </StyledFigure>
      {isOpen && (
        <Overlay onClick={closeLightbox}>
          <ImageWrapper>
            <RectangularImage lightbox={true} src={props.src} alt={props.alt} />
          </ImageWrapper>
        </Overlay>
      )}
    </>
  );
};
