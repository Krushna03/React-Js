
import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'
//Outlet: It will act as a base for this layout and above & below will remain same except the central part. Means Header and footer me chnages nhi krega unko same rakhega bt uske bich me jaha hamne outlet diya hai vaha changes karega.
//Toh Header,Footer same rahega but uske andar/central part ki chije change hoti rahegi

function Layout() {
   return (
      <>
         <Header />
         <Outlet />
         <Footer />
      </>
   )
}

export default Layout
