
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import './styles/index.css'

import Home from './pages/Home'
import Gatherings from './pages/Gatherings'
import About from './pages/About'
import Giving from './pages/Giving'
import Blog from './pages/Blog'
import BlogDetail from './pages/BlogDetail'
import GatheringDetail from './pages/GatheringDetail'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'gatherings', element: <Gatherings /> },
      { path: 'gatherings/:id', element: <GatheringDetail /> },
      { path: 'giving', element: <Giving /> },
      { path: 'blog', element: <Blog /> },
      { path: 'blog/:id', element: <BlogDetail /> },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
