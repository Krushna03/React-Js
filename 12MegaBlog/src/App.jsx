import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from './appwrite/auth'
import { logIn, logOut } from './store/authSlice'
import {Header, Footer} from './components'
import {Outlet} from 'react-router-dom'

function App() {
  const [loading , setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
        .then((userData) => {
            if(userData){
              dispatch(logIn({userData}))
            }
            else{
              dispatch(logOut())
            }
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => setLoading(false))
  },[])


  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
          <Header />
           <main>
           TODO : {/*  <Outlet /> */}
           </main>
          <Footer />
      </div>
    </div>
  ) : null
}

export default App


// console.log(process.env.REACT_APP_APPWRITE_URL); //Thus got the access to environment variable. But we won't get the output becz we created app using VITE. It is used for CREATE-REACT app.

//console.log(import.meta.env.VITE_APPWRITE_URL);
