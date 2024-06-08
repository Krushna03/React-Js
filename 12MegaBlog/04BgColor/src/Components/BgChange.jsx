import { useState } from 'react'
import './Style.css'

function BgChange() {
  const [color, setColor] = useState('olive')

  return (
    <>
      <div className='main'
        style={{backgroundColor: color}}
      >
          <div className='box'>
             
             <button className='red'
               onClick={() => setColor('red')}>
                 Red
             </button>

             <button className='blue'
               onClick={() => setColor('blue')}>
                 Blue
             </button>

             <button className='green'
               onClick={() => setColor('green')}>
                 Green
             </button>

             <button className='yellow'
               onClick={() => setColor('yellow')}>
                 Yellow
             </button>
          </div>
      </div>
    </>
  )
}

export default BgChange;
