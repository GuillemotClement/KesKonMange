import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootDisplay from './pages/RootDisplay'
import ErrorPage from './pages/ErrorPage'
import HomePage from './pages/HomePage'

const router = createBrowserRouter([
  {
    // gestion du layout principal
    path: "/",
    element: <RootDisplay />,
    // affichage si page existe pas
    errorElement: <ErrorPage/>,
    // définition des contenus enfants
    children: [
      {
        path: "/",
        element: <HomePage/>
      }
    ]
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
