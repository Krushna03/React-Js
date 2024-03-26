import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { logIn as AuthLogin, logOut } from '../store/authSlice'
import {Button, Input, Logo } from './index'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import {useForm} from 'react-hook-form'

function Login() {
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const {register, handleSubmit} = useForm()
   const [error, setError] = useState('')

   const login = async(data) => {
      setError('') // always use this for login register form
      try {
        const session = await authService.login(data)
        if(session){
         const userData = await authService.getCurrentUser()
          if(userData) dispatch(AuthLogin(userData));
          navigate('/')
        }
      } catch (error) {
         setError(error.message)
      }
   }


return (
   <div className='flex items-center justify-center w-full'>
      <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
      <div className="mb-2 flex justify-center">
         <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
         </span>
      </div>
      <h2 className='text-center text-2xl font-bold leading-tight'>Sign in to your account</h2>
      <p className="mt-2 text-center text-base text-black/60">
            Don&apos;t have any account?&nbsp;
            <Link
               to="/signup"
               className="font-medium text-primary transition-all duration-200 hover:underline"
            >
               Sign Up
            </Link>
         </p>

         {error && <p className='text-red-600 mt-8 text-center'>{error}</p>}
         
         <form onSubmit={handleSubmit(login)} claasName='mt-8'>
            <div className='space-y-5'>
               
               <Input 
                 label='Email: '
                 placeholder='Enter your email'
                 type='email'
                 //always write register as spread to avoid value overwrite problem
                 {...register('email', {
                     required: true,
                     validate: {
                        matchPatern: (value) => /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/. test(value) || 'ENter address must be a valid address'
                        // search this on Regexp
                        }
                     })} 
               />
               <Input 
                 label='Password: '
                 placeholder='Enter your password'
                 type='password' 
                 {...register('password', {required:true} ) }
                 />

               <Button 
                  type='submit'
                  className='w-full'>
                   Sign in
                </Button>
            </div>
         </form>

      </div>
   </div>
)
}

export default Login