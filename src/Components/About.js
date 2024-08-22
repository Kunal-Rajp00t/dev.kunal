import React, { useEffect, useRef } from 'react'
import './about.css';
// import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const About = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  useEffect(() => {
    gsap.from(ref1.current, {
      scrollTrigger: {
        trigger: ref1.current,
        start: "top 70%",
        end: "bottom 20%",
      },
      opacity: 0,
      y: 50,
      duration: .8
    });
    gsap.from(ref2.current, {
      scrollTrigger: {
        trigger: ref2.current,
        start: "top 70%",
        end: "bottom 20%",
      },
      opacity: 0,
      y: 40,
      duration: .7
    });
    gsap.from(ref3.current, {
      scrollTrigger: {
        trigger: ref3.current,
        start: "top 70%",
        end: "bottom 20%",
      },
      opacity: 0,
      y: 40,
      duration: .7
    })
  }, []);


  return (
    <div className='mainAbout' id='About'>
      <h1 ref={ref1}>ABOUT ME</h1><div className="under"></div>
      <p>Here you will find more information about me, and my current skills mostly in terms of programming and technology</p>
      <div className="section">
        <div className="para"><h2 ref={ref2} style={{color:"black"}}>Get to know me!</h2>
          I'm a <span className='bld0'>Full Stack Web Developer</span> student with a strong focus on building and managing both the Front-end and Back-end of Websites and Web Applications. My goal is to create seamless and efficient digital solutions that contribute to the overall success of any <span className='bld0'>Project</span>. Check out some of my work in the Projects section.
          <br />
          <div className="sp0" style={{ margin: "1em" }}></div>
          In addition to development, I am passionate about sharing the knowledge I've gained over the years in <span className='bld0'>Web Development</span> and <span className='bld0'>Data Structures & Algorithms </span>. I regularly post content to help other members of the developer community. Feel free to connect or follow me on <a href="https://in.linkedin.com/in/kunal-rajput-616178275" target='_blank' rel="noopener noreferrer" className='cl0'>LinkedIn</a> and <a href='https://www.instagram.com/__the_name_is_kunal__/?next=%2F#' className='cl0' target='_blank' rel="noopener noreferrer">Instagram</a> for useful content related to Web Development, Programming, and DSA.
          <br />
          <div className="sp0" style={{ margin: "1em" }}></div>
          I am actively seeking <span className='bld0'>Job</span> opportunities where I can apply my skills, continue learning, and grow professionally. If you have a suitable opportunity that aligns with my skills and experience, please don't hesitate to <span className='bld0'>Contact</span> me.
          <div className="sp0" style={{ margin: "1em" }}></div>
          <h6><button className='hiBtn'><a href="#contact"> Say Hi</a></button></h6>
        </div>
        <div className="skills"><h2 ref={ref3}>Skills</h2>
          <div className="packet">
            <button className="skBtn">HTML</button><button className="skBtn">CSS</button>
            <button className="skBtn">JAVASCRIPT</button><button className="skBtn">REACT</button>
            <button className="skBtn">GSAP</button><button className="skBtn">NODE</button>
            <button className="skBtn">EXPRESS</button><button className="skBtn">BOOTSTRAP</button>
            <button className="skBtn">DOM</button><button className="skBtn">UI/UX DESIGN</button>
            <button className="skBtn">NETLIFY</button>
            <button className="skBtn">CORE JAVA</button><button className="skBtn">REST APIs</button>
            <button className="skBtn">RESPONSIVE DESIGN</button><button className="skBtn">PROBLEM SOLVING</button>
            <button className="skBtn">DATA STRUCTURES</button><button className='skBtn'> ALGORITHMS</button>
            <button className="skBtn">REDUX</button><button className="skBtn">GIT</button>
            <button className="skBtn">GITHUB</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
