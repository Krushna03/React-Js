import { useState } from 'react'
import './App.css'

function App() {

  //counter is a actual variable, setCounter helps to manipulate the counter
  //useState(is a Hook) me counter ki value initialize ki as 10
  // Or any given variable ki value set ki jati hai it can be empty to, can set [] , {} , ‘’
    const [counter , setCounter] = useState(10)

    // let counter = 10;

    const addValue = () => {
      if( counter < 20 ) {
        //counter = counter + 1 & then given the value in setCounter
        setCounter(counter + 1)
      }
      else {
        setCounter(counter)
      }
    }

    const removeValue = () => {
      if( counter <= 0 ) {
        setCounter(counter)
      }
      else {
        setCounter(counter - 1)
      }
    }

  return (
    <>
      <h1>Chai Aur react</h1>
      <h2>Counter value : {counter}</h2>

      <button
      onClick={addValue}
      >Add Value : {counter}</button>

      <button
      onClick={removeValue}
      >Remove Value : {counter}</button>

      <p>Footer : {counter}</p>
    </>
  )
}

export default App






