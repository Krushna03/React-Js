import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import BgChange from './Components/BgChange.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
   <>
     <App color='red'/>
     <App color='blue'/>
     <App color='green'/>
     <App color='yellow'/>
     {/* <BgChange /> */}
   </>
)
