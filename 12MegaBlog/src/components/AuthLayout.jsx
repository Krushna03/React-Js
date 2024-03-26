import React, {useEffect , useState} from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

export default function AuthLayout({children, authentication=true}) {
      const navigate = useNavigate()
      const [laoder, setLoader] = useState(true)
      const authStatus = useSelector(state => state.auth.status)

      useEffect(() => {
      // true && false !== true  => true && true
        if(authentication && authStatus !== authentication){
           navigate('/login')
        }
      // false && true !== true  => false && false
        else if(!authentication && authStatus !== authentication){
           navigate('/')
        }
        setLoader(false)
      },[navigate, authStatus, authentication])

   return laoder ? <h1>Loading....</h1> : <>{children}</>

}

 AuthLayout
