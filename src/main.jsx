import { Component, StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { PageTemplate } from './templates/PageTemplate.jsx'

import { indexLoader, rsvpLoader, locationLoader, timingsLoader, giftsLoader } from './loaders.js'

const titleHandle = { pageTitle: data =>  data.pageTitle }

const router = createBrowserRouter([
  {
    path: '/',
    Component: PageTemplate,
    children: [
      {
        index: true,
        loader: indexLoader,
        lazy: () => import('./routes/_index.jsx'),
        handle: titleHandle
      },
      {
        loader: rsvpLoader,
        path : 'rsvp',
        lazy: () => import('./routes/rsvp.jsx'),
        handle: titleHandle
      },
      {
        loader: locationLoader,
        path: 'location',
        lazy: () => import('./routes/location.jsx'),
        handle: titleHandle
      },
      {
        loader: timingsLoader,
        path: 'timings',
        lazy: () => import('./routes/timings.jsx'),
        handle: titleHandle
      },
      {
        loader: giftsLoader,
        path: 'gifts',
        lazy: () => import('./routes/gifts.jsx'),
        handle: titleHandle
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
