import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.tsx'
import { store } from './store/store.ts'
import './index.css'
import Root from './routes/Root.tsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import LogInBox from './components/LogInBox/LogInBox.tsx'
import PostCardsArea from './components/PostCardsArea/PostCardsArea.tsx'




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "explore",
        element: <PostCardsArea />,
      },
      {
        path: "login",
        element: <LogInBox />
      }
    ]
  },
])


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
