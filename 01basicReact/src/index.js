import React from 'react';  //Actual react library providing everything it has.
import ReactDOM from 'react-dom/client'; //It is browser specific, provide the browser property, support to react to work for browser

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));  
//Created a new node element containing div and a virtual dom of react.

root.render(

    <App />

);


