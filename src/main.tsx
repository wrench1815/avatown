import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './assets/styles/index.css'

import Index from './views/Market.tsx'
import NavBar from './components/NavBar/Index.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <NavBar />
    <div className="max-w-full prose prose-headings:my-0 prose-img:my-0 prose-figure:my-0">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
)
