import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

 // console.log(process.env.REACT_APP_APPWRITE_URL); //Thus got the access to environment variable. But we won't get the output becz we created app using VITE. It is used for CREATE-REACT app.

  console.log(import.meta.env.VITE_APPWRITE_URL);

  return (
    <>
     <h1>Krshnsa</h1>
    </>
  )
}

export default App
