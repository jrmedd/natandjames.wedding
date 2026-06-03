import styled, { css } from 'styled-components'

const ContentContainer = styled.div(
  (props) => css`
    margin: 0 auto;
    width: 46rem;
    max-width: 90%;
    padding: 2rem 0 4rem 0;
    display: flex;
    flex-flow: column;
    gap: 2rem;
  `,
);

const Main = styled.main(props => css`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 100%;
  view-transition-name: fadeInOut;
`)

const Header = styled.header(props => css`
  width: 100%;
  display: flex;
  flex-flow: column;
  gap: ${ props => props.$gap ?? '1rem' };
  transition: all 0.5s ease;
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    justify-content: center;
    align-items: center;
  }
`)

const Nav = styled.nav(props => css`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 2rem;
  height: fit-content;
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    width: 100vw;
    /* margin-top: 1rem; */
  }
`)

const Cluster = styled.div(props => css`
  display: flex;
  flex-flow: ${props.$reverse ? 'row-reverse' : 'row'} wrap;
  max-width: 100%;
  justify-content: ${props => props.$justify ? props.$justify : 'unset'};
  align-items: ${props => props.$align ? props.$align : 'unset'};
  gap: ${props => props.$gap ?? '1rem'};
`)

const Stack = styled.div(props => css`
  display: flex;
  flex-flow: column;
  max-width: 100%;
  width: ${props => props.$width ?? 'unset'};
  gap: ${props => props.$gap ?? '1rem'};
  justify-content: ${props => props.$justify ? props.$justify : 'center'};
  align-items: ${props => props.$align ? props.$align : 'center'};
  flex-grow: 1;
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    width: 100%;
    align-items: ${props => props.$alignMobile ? props.$alignMobile : props.$align ?? 'unset'};
  }
`)

const HR = styled.hr`
  border: none;
  border-top: 1px solid ${(props) => props.theme.text.body};
  margin: 0 auto;
  width: 33%;
  opacity: 0.55;
`;

export { Cluster, ContentContainer, Header, Main, Nav, Stack, HR }
