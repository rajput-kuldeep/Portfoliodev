import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {  createBrowserRouter, RouterProvider } from 'react-router-dom'

import About from './Pages/About.tsx'
import ContactUs from './components/Contact us/Contact.tsx'
import Home from './Pages/Home.tsx'



const router = createBrowserRouter([
  {
    path : "/",
    element: <App />,
    children : [
      {
        path : "/",
        element : <Home />
      },

    {
      path : "/about",
      element : <About />
    },

    {
      path : "contact-us",
      element : <ContactUs />
    },
   
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider  router={router}/>
  
  </React.StrictMode>,
)
