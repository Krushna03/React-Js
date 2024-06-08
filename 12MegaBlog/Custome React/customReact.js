function customRender(reactElement, container){
   /*
   const domElement = document.createElement(reactElement.type)
   domElement.innerHTML = reactElement.children
   domElement.setAttribute('href', reactElement.props.href)
   domElement.setAttribute('target', reactElement.props.target)

   container.appendChild(domElement)
   */

   //Just utilization/craetion of element using a function
   const domElement = document.createElement(reactElement.type)
   domElement.innerHTML = reactElement.children
   for (const prop in reactElement.props) {
       if (prop === 'children') continue;
       domElement.setAttribute(prop, reactElement.props[prop])
   }
   container.appendChild(domElement)
}


//Our own customized react representation of data of tags
const reactElement = {
   type: 'a',
   props: {
       href: 'https://google.com',
       target: '_blank'
   },
   children: 'Click me to visit google'
}

//selected element from html.
const mainContainer = document.querySelector('#root')

// To render in browser.
customRender(reactElement, mainContainer)