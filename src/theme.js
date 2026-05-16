import '@fontsource/ojuju';
import '@fontsource/ibm-plex-mono';

import { createGlobalStyle } from 'styled-components'

const olive = '#6f744a'
const ink = '#f9f6e5'

const breakpoints = {
  mobile: '640px',
  tablet: '768px',
  desktop: '1200px'
}

export const theme = {
  dark: {
    fonts: {
      body: `'IBM Plex Mono', monospace`,
      heading: `'Ojuju', sans-serif;`,
    },
    text: {
      heading: ink,
      body: ink,
    },
    interactive: ink,
    interactiveShade: ink,
    background: olive,
    breakpoints
  }
}
export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  ::view-transition-old(fadeInOut) {
    animation: fade-out .5s ease both;
  }

  ::view-transition-new(fadeInOut) {
    animation: fade-in .5s ease both;
  }

  @keyframes fade-out {
    to {
      opacity: 0;
    }
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
  }

  body {
    background-color: ${props => props.theme.background};
    font-family: 'IBM Plex Mono', monospace;
    font-optical-sizing: auto;
    font-weight: 350;
    margin: 0;
    overflow-y: scroll;
  }
`