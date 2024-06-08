import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

  function MyApp(){
     return(
      <div>
        <h1>Krushna</h1>
      </div>
     )
  }

  // const ReactElm = {
  //   type: 'a',
  //   props: {
  //      href: 'https://google.com',
  //      target: '_blank'
  //   },
  //   children: 'Visit to google'
  //  }
 

   const ReactElm = (
      <a href="https://google.com" target='_blank'>Visit Google with krushna</a>
   )
       

   const name = 'krushna '

   const ReactElement = React.createElement(
        'a',
        {href: 'https://.google.com' , target: '_blank'},
        'Visited a google 100 times',
        name
   )
   

  
   const ReactElements = React.createElement(
      'h1',
      {},
      'This is krushna sakhare',
      name
 )

ReactDOM.createRoot(document.getElementById('root')).render(

  ReactElements 

)
