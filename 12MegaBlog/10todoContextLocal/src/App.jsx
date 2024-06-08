import { useEffect, useState } from 'react'
import { TodoProvider } from './contexts'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
      setTodos((prev) => [{id: Date.now() , ...todo}, ...prev])
  }

  //here we want to return a value thus provided () instead {}
  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((eachTodo) => (eachTodo.id === id ? todo : eachTodo) ))
  }

  //Here jo match nhi karega toh array me aata jayega
  //In filter, we assume that it will act as true 
  const deleteTodo = (id) => {
     setTodos((prev) => prev.filter((elm) => elm.id !== id ))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((eachTodo) => eachTodo.id === id ? 
                    {...eachTodo, completed: !eachTodo.completed} : eachTodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todo'))
    
    if(todos && todos.length > 0){
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
      localStorage.setItem('todo', JSON.stringify(todos))
  },[todos])


  return (
    < TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id} className='w-full'>
                             <TodoItem todo={todo}/>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </ TodoProvider>
  )
}

export default App
