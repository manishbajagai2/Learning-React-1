import React from 'react'
import logo from "../images/reactLogo.png"

export default function NavBar() {
  return (
    <nav>
        <div className="nav">
            <img src={logo} className="nav--logo" alt='nav-logo'/>
            <h3 className="nav--title">ReactFacts</h3>
            <h4 className="nav--text">React Course - Project 1</h4>
        </div>
    </nav>
  )
}
