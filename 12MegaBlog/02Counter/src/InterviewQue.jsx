import React from 'react'

function InterviewQue() {
 
       const [counter , setCounter] = useState(10)
   
       const addValue = () => {
         if( counter < 20 ) {
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

export default InterviewQue
