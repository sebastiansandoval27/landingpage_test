
import React from 'react'
import NavbarMenu from '../NavbarMenu/NavbarMenu';

const Layout = ({children}) => {
  return (
    <div>
      <NavbarMenu />
      { children }
    </div>
  )
}

export default Layout
