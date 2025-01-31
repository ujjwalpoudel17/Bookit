import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import Favourites from './Components/Favourites/Favourites.jsx'
import Recently from './Components/Recently/Recently.jsx'
import Explore from './Components/Explore/Explore.jsx'
import Login from './Components/Login/Login.jsx'
import Usersign from './Components/Usersign/Usersign.jsx'
import About from './Components/About/About.jsx'
import Signup from './Components/Signup/Signup.jsx'
import Admin from './Components/Admin/Admin.jsx'
import Hotels from './Components/Admin/Hotels.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Layout/>}>
        <Route path='' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Favourites' element={<Favourites/>}/>
        <Route path='/Recently' element={<Recently/>}/>
        <Route path='/Explore' element={<Explore/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Usersign' element={<Usersign/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path="*" element={<div>Not Found</div>}/>
      </Route>
        <Route path='/Admin' element={<Admin />} />
        <Route path='/Hotels' element={<Hotels />} />
      </>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
