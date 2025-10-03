
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import './styles/index.css'

import Home from './pages/home/Home'
import Gatherings from './pages/gathering/Gatherings'
import About from './pages/about/About'
import Giving from './pages/giving/Giving'
import Blog from './pages/blog/Blog'
import BlogDetail from './pages/blog/BlogDetail'
import GatheringDetail from './pages/gathering/GatheringDetail'
import { PodcastPage } from './pages/podcast/Podcast'

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
      { path: 'podcasts', element: <PodcastPage /> },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
