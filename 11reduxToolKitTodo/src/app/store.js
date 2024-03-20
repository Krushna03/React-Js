import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../Features/todo/todoSlice'

// Here: insode this key : Value is there pair. There can be multiple pair
export const store = configureStore({
   reducer: todoReducer
})