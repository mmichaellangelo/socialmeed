import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'
import './index.css'


import Root, { rootLoader } from './routes/Root.tsx'
import User, { userLoader } from './routes/User.tsx'

import {
  createBrowserRouter,
  RouterProvider,
  useRouteLoaderData,
} from "react-router-dom"
import LogInBox from './components/LogInBox/LogInBox.tsx'
import PostCardsArea from './components/PostCardsArea/PostCardsArea.tsx'
import UserProfilePage from './components/UserProfilePage/UserProfilePage.tsx'




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    //loader: rootLoader,
    children: [
      {
        path: "explore",
        element: <PostCardsArea />,
      },
      {
        path: "login",
        element: <LogInBox />
      },
      {
        path: "user/:userId",
        loader: userLoader,
        element: <User />,
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
