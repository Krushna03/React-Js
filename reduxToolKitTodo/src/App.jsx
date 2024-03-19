import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './component/Todo'
import AddTodo from './component/AddTodo'

function App() {

  return (
    <>
     <h2>Learn about the Redux Toolkit</h2>
     <AddTodo />
     <Todo />
    </>
  )
}

export default App
