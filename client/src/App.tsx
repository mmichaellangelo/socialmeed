import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import './App.css'

import {useState} from 'react'

import Header from './components/Header/Header'



import { useAppSelector } from './store/store.ts'
import LogInBox from "./components/LogInBox/LogInBox.tsx";
import PostCardsArea from "./components/PostCardsArea/PostCardsArea.tsx";



interface user {
  username: string,
  first_name: string,
  last_name: string,
  age: number,
}


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={ <PostCardsArea /> } >
      <Route path="login" element={ <LogInBox /> } />
    </Route>
  )
)


export default function App() {

  const [loggedIn, setLoggedIn] = useState(true)
  
  const userInfo = useAppSelector(
    (state) => state.user
  )
  
  

  return (
    <div id="App">
      <Header />

      <RouterProvider router={router} />
      
    </div>
  )
}



