import { useState } from 'react'

function App() {
  const [color, setColor] = useState('black')

  return (
    
    <div className="w-full h-screen duration-900" style={{backgroundColor: color}}>

    <div className='w-full bg-gray-400 flex-auto text-white'> 
      
      <button 
        onClick={() => setColor('red')}
        className='bg-red-500 p-4 m-2 rounded-xl'>
        Red
      </button>

      <button 
        onClick={() => setColor('green')}
        className='bg-green-500 p-4 m-2 rounded-xl'>
        Green
      </button>

      <button 
         onClick={() => setColor('blue')}
         className='bg-blue-500 p-4 m-2 rounded-xl'>Blue</button>

      <button 
         onClick={() => setColor('yellow')}
         className='bg-yellow-500 p-4 m-2 rounded-xl'>Yellow</button>

      <button 
         onClick={() => setColor('pink')}
         className='bg-pink-500 p-4 m-2 rounded-xl'>Pink</button>

      <button 
         onClick={() => setColor('gray')}
         className='bg-gray-500 p-4 m-2 rounded-xl'>Gray</button>

      <button 
         onClick={() => setColor('purple')}
         className='bg-purple-500 p-4 m-2 rounded-xl'>Purple</button>
      
      </div> 
    </div>
  )
}

export default App
