import { createSlice, nanoid } from "@reduxjs/toolkit";

 const initialState = {
   todos:[{
      id: 1,
      text: 'Krushna'
   }]
 }


 export const todoSlice = createSlice({
     name : 'todo',
     initialState,
     reducers: {
      addTodo: (state, action) => {
         const todo = {
            id: nanoid(),
            text: action.payload
            //text: action.payload.text  /can also write like this
            //Thus, action provided a value given in input like a prop. 
            //Payload is a object, we can access multiple property using payload. Ex: payload.text 
         }
         state.todos.push(todo)
      },

      removeTodo: (state, action) => {
         state.todos = state.todos.filter((todo) => todo.id !== action.payload
         //Here payload me .id likhna jaruri nhi hai kyo ki action me id mili hai toh payload.id automatically id samaj lega aur compare karega
         )
      },

      updateTodo: (state, action) => {
         state.todos = state.todos.map((todo) => todo.id === action.payload ? {...todo, text: action.payload.text} : todo )
      }
     }
 })

// All the reducers are exported by two ways & always use both the ways

// 1. All the individual functionality will used in component thus all shd get exported
 export const {addTodo,removeTodo,updateTodo} = todoSlice.actions

//  2. For the store where all reducers should get registered to get updated in future operation
// Thus if we created more slice we should export using below text
 export default todoSlice.reducer
