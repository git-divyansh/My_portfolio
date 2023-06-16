"use client";
import React, { useState } from 'react'
import "./Navbar.css"


const Navbar = () => {

  const [home, setHome] = useState(0);
  const [portfolio, setPortfolio] = useState(0);
  const [about, setAbout] = useState(0);

  return (

    <div className='navbar' style={{zIndex : "10"}}>
      <div className='container-nav'>
        <a className='bar' href='#home'>HOME</a>
        <a className='bar' href='#portfolio'>PORTFOLIO</a>
        <a className='bar' href='#about'>ABOUT</a>
        <a className='bar' href='#contact'>CONTACT</a>
      </div>
    </div>
  )
}

export default Navbar