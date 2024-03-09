import { useState } from 'react'
import './App.css'

function App({color}) {
    const [buttonColor, setColor] = useState('olive')

  return (
    <>
         <div >
          <div>
             
             <button onClick={() => setColor(color)}
               style={{backgroundColor: buttonColor}}>
                 {color}
             </button>

          </div>
      </div>
    </>
  )
}

export default App
