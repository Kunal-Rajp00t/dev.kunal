import React from 'react'
import './navbar.css'
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

const Navbar = () => {
  useGSAP(()=>{
    gsap.from('.hamburger-menu',{
      duration:1,opacity:0
    })
    gsap.to('.mover1',{
      x:"100vw",
      delay:.4,duration:2
    })
    gsap.to('.mover2',{
      x:"100vw",
      delay:.45,duration:2
    })
  })
  return (
    <div className='nav' style={{overflow:'hidden',height:'7vh'}}>
    <div className="mover1"></div><div className="mover2"></div>
      <div className="hamburger-menu">
        <div>
        <input id="menu__toggle" type="checkbox"/>
        <label className="menu__btn" htmlFor="menu__toggle">
          <span></span>
        </label>
        <ul className="menu__box">
          <li><a className="menu__item" href="#Home">Home</a></li>
          <li><a className="menu__item" href="#About">About</a></li>
          <li><a className="menu__item" href="#Projects">Projects</a></li>
          <li><a className="menu__item" href="#solves">Learning</a></li>
          <li><a className="menu__item" href="#contact">Contact</a></li>
          
          <li className='navLi'>
            <a className="menu__item2" href="https://github.com/Kunal-Rajp00t" target='_blank' rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a> 
            <a className="menu__item2" href="https://in.linkedin.com/in/kunal-rajput-616178275" target='_blank' rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a>
            <a className="menu__item2" href="https://www.instagram.com/__the_name_is_kunal__/?next=%2F#" target='_blank' rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
            <a className="menu__item2" href="https://x0play.netlify.app/" target='_blank' rel="noopener noreferrer"><i className="fa-solid fa-gamepad"></i></a>

          </li>
        </ul>
        </div>
        <h2 className='myName'>{'{ dev.kunal }'}</h2>
      </div>
    </div>
  )
}

export default Navbar
