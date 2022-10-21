import React from 'react'
import Subnav from './Subnav';
import TopNav from './Topnav'
import "./nav.scss"


const NavBar = () => {
  return (
    <nav className="nav-wrapper">
        <TopNav/>
        <hr/>
        <Subnav/>
    </nav>
  )
}

export default NavBar