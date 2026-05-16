import { Link, Outlet, ScrollRestoration, useLocation, useMatches } from 'react-router'
import styled, { css, ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from '../theme'
import { NavButton } from '../components/NavButton'
import { Button } from '../components/Button'
import { SkipLink } from '../components/SkipLink'
import { ContentContainer, Header, Main, Nav } from '../components/Layout'
import { Footer } from '../components/Footer'
import { Heading, Paragraph, ScreenReaderOnly } from '../components/Typography'
import { useEffect, useRef } from 'react'

const slugToTitle = string => {
  const firstSlug = string.split('/')[1]
  return firstSlug.length > 0 ? firstSlug.charAt(0).toUpperCase() + firstSlug.slice(1) : 'Home'
}

const defaultTheme = theme.dark

export const PageTemplate = props => {
  const location = useLocation()
  const matches = useMatches()
  const match = matches.find(match => Boolean(match.handle?.pageTitle))
  const pageStartRef = useRef(null)
  useEffect(() => {
    document.title = `${match.handle.pageTitle(match.data)} – Nat and James`
    pageStartRef?.current.focus()
  }, [location.pathname])
  return (
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyle />
    <ScrollRestoration />
    <ScreenReaderOnly  aria-live='polite' aria-atomic='true' as='aside' ref={pageStartRef} tabIndex='-1'>{`Viewing page: ${document.title}`}</ScreenReaderOnly>
    <SkipLink as='a' href='#main-content'>Skip to main content</SkipLink>
    <ContentContainer>
      <Header role='banner'>
        <Heading $screenReaderOnly={location.pathname === '/'} $size='xl' as={Link} to='/' viewTransition aria-label='Home - Nat and James'>Nat and James</Heading>
        <Nav aria-label='primary'>
          <NavButton to='/location' viewTransition>Location</NavButton>
          <NavButton to='/timings' viewTransition>Timings</NavButton>
          <NavButton to='/gifts' viewTransition>Gifts</NavButton>
        </Nav>
      </Header>
      <Main id='main-content'>
        <Outlet />
      </Main>
      <Footer />
    </ContentContainer>
  </ThemeProvider>
)}