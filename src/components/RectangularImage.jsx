import styled, { css } from 'styled-components'

const StyledPicture = styled.picture(props => css`
  display: block;
  border-radius: .25rem;
  overflow: hidden;
  width: 100%;
  aspect-ratio: ${props.$lightbox ? 'unset' : '4/3'};
  object-fit: contain;
  height: auto;
  max-width: 100%;
  cursor: ${props => props.onClick ? 'pointer' : 'unset'};
  transition: transform 0.2s;
  &:hover {
    transform: ${props => props.onClick ? 'scale(1.0125)' : 'unset' };
  }
`)

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: ${props => props.$lightbox ? 'contain' : 'cover'};
`;

export const RectangularImage = props => {
  if (!props.src) {
    console.error('Filename is required for ImageLoader component.');
    return null;
  }

  const fileBase = props.src?.replace(/\.(jpg|jpeg|webp|png)$/i, '');
  return (
    <StyledPicture $lightbox={props.lightbox} onClick={props.onClick} $size={props.size}>
      <source srcSet={`/${fileBase}.webp`} type="image/webp" />
      <StyledImg $lightbox={props.lightbox} src={`/${props.src}`} alt={props.alt} />
    </StyledPicture>
  );
};
