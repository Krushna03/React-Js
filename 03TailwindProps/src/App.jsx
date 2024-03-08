import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Component/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    name: "krushna",
    age: 21
  }

  let myArr = [1,2,3]
//Here Card inside return are called Components
  return (
    <>
     <h1 className="bg-green-400 text-black p-4 rounded-xl">Tailwnd Test</h1>
     <Card userName='Krushna Sakhare' myArr={name="krushna"} someObj={myObj} Arry={myArr} btnText='click Me'/>
     <Card userName="Nandu" btnText='Visit Me'/>
     <Card />
    </>
  )
}

export default App
