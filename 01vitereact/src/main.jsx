import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp(){ //We call MyApp() inside render like as we call function but hsould not call like this
    return (
        <div>
            <h1>Custom App | chai</h1>
        </div>
    )
}


// We cannot render this react internal structure. Becz it is our own custom element & not a actual custom element.
// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }


//WIll get executed 
const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit google</a>
)



// use of evaluated expression
const anotherUser = " Chai aur code"


// Actual custom React element. babble inject it.
const reactElement = React.createElement(
    'a',   //tag
    {href: 'https://google.com',target: '_blank' },  //object
    'click me to visit google',  //innerText

     anotherUser //: It is a ex of evaluated expression & js element or variables
)


ReactDOM.createRoot(document.getElementById('root')).render(

   anotherElement 
  
)
