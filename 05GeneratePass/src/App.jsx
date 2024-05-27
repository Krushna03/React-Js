import { useRef } from 'react'
import { useEffect } from 'react'
import { useState , useCallback } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [character, setCharacter] = useState(false)
  const [password, setPassword] = useState('')

  const passwordGenerator = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  if(number) str += "0123456789"
  if(character) str += "~!@#$%^&*(:;<>/"

   for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
   }
     setPassword(pass)

  } , [length, number,character, setPassword]) 


  const reference = useRef(null)

  const copyPass = useCallback(() => {
     reference.current?.select(password)
     reference.current.setSelectionRange(0,50)
     window.navigator.clipboard.writeText(password)
  }, [password])
  
  
  useEffect(() => {
    passwordGenerator()
  } , [length , number, passwordGenerator, character])

  return (
   <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
    
    <h1 className='text-white text-center my-3'>Password generator</h1>

     <div className='flex shadow rounded-lg overflow-hidden mb-4'>

        <input 
           type="text"
           value={password}
           className='outline-none w-full py-1 px-3'
           readOnly
           placeholder='Password'
           ref={reference}
        />

        <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          onClick={copyPass}
        >
           copy 
        </button>
     </div>

     <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
           
        <input 
           type="range"
           value={length}
           min={5}
           max={100}
           className='curson-pointer'
           onChange={(e) => setLength(e.target.value)}
        />
        <label>Length: {length}</label>

        <div className='flex items-center gap-x-1'>
        <input 
           type="checkbox"
           defaultChecked={number}
           className='curson-pointer'
           onChange={() => setNumber((prev) => !prev)}
        />
        <label htmlFor='num'>Numbers</label>
        </div>

        <div className='flex items-center gap-x-1'>
        <input 
           type="checkbox"
           defaultChecked={character}
           className='curson-pointer'
           onChange={() => setCharacter((prev) =>!prev)}
        />
        <label htmlFor='char'>Character</label>
        </div>
        
      </div>
     </div>
   </div>
  )
}

export default App
