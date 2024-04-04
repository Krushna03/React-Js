
function curender(container , reactElm){
   const domElm = document.createElement(reactElm.type);
   domElm.innerHTML = reactElm.children;

   for (const prop in reactElm.props) {
      if(prop === 'children') continue;
      domElm.setAttribute(prop, reactElm.props[prop])
   }
   container.appendChild(domElm)
}


const reactElm = {
   type: 'a',
   props: {
      href: 'https://google.com',
      target: '_blank'
   },
   children: 'Visit to google'
  }

  const maiContainer = document.querySelector('#root')


curender(maiContainer , reactElm)

 