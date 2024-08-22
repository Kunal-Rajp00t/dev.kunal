import React, { useRef } from 'react';
import './home.css'
import MyPic from './Images/mypic3y.jpg'
import resume from './Images/Kunal_Resume.pdf';
// import MyPic from './Images/mypic2.jpg'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Home = () => {
  const heading = useRef();
  const contRef = useRef();
  const imgRef = useRef();
  useGSAP(() => {
    gsap.from(heading.current, {
      x: -100,
      opacity: 0,
      duration: 1.8,
      ease: 'bounce',
    })
    gsap.from('.myintro', {
      y: 10,
      opacity: 0,
      delay: 1.2,
    })
    gsap.from('.resume-button', {
      x: -10,
      y: 10,
      opacity: 0,
      duration: .5,
      delay: 2,
    })
    gsap.from(contRef.current, {
      opacity: 0, scale: .5, duration: .5, delay: 2.7
    })
    gsap.from(imgRef.current, {
      background: 'linear-gradient(to left ,#556270, #7e96af, #ff9999)', duration: 1,yoyo:true,repeat:-1
    })
  })
  return (
    <div className="mainHome" id='Home'>
    <div className='main'>
      <div className="intro">
        <div ref={heading} className="heading">
          <h1 className='hiClass'style={{ fontSize: '1.5em' }}>Hi, I am</h1><h1 style={{ fontSize: '2.6em' }}>Kunal Rajput</h1>
        </div>
        <p className='myintro'>A Result-Oriented Web Developer building and managing Websites and Web Applications that leads to the success of the overall product.</p>
        <div className="btns" style={{ display: 'flex' }}>
          <a href={resume}>
          <button className='resume-button almendra-regular'>Open Resume</button>
          </a>
          <div ref={contRef} className="container">
            <a href="https://in.linkedin.com/in/kunal-rajput-616178275" target='_blank' rel="noopener noreferrer"  className="button"><i className="fa fa-linkedin"></i></a>
            <a href="https://github.com/Kunal-Rajp00t" target='_blank' rel="noopener noreferrer" className="button"><i className="fa fa-github"></i></a>
            <a href="https://x.com/rKunal_?t=4wqGKQS-uleUEThkPDAwKA&s=09" target='_blank' rel="noopener noreferrer" className="button"><i className="fa fa-twitter"></i></a>
          </div>
        </div>

      </div>
      <div className="photo">
        <img src={MyPic} alt="" srcSet="" className='image' ref={imgRef} />
      </div>
    </div>
    </div>

  )
}

export default Home;


