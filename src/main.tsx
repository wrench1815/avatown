import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './assets/styles/index.css'

import Default from './layout/default.tsx'

import Index from './views/Market.tsx'
import SingleItem from './views/SingleItem.tsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Default />,
    children: [
      {
        path: '/',
        element: <Index />,
      },
      {
        path: '/:avatarId',
        element: <SingleItem />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
