import React, { useEffect, useRef, useState } from 'react'
import './Projects.css'
import { gsap } from 'gsap'

import TaskifyMB from './Images/TaskifyMB.jpg';
import DTTMB from './Images/DTTMB.jpg'
import QRMB from './Images/QuickRateMB.jpg'
import BMIMB from './Images/BMIMB.jpg'
import SSMB from './Images/SSMB.jpg'
import PortfolioMB from './Images/PortfolioMB.jpg'
import PortfolioPC from './Images/PortfolioPC.jpg'
import SSPC from './Images/SSPC.jpg'
import BMIPC from './Images/BMIPC.jpg'
import QRPC from './Images/QuickRatePC.jpg'
import DTTPC from './Images/DTTPC.jpg'
import TaskifyPC from './Images/TaskifyPC.jpg'

const Projects = () => {
  const[screen,setScreen]=useState(window.screen.width);
  useEffect(() => {
    const handleResize = () => {
      setScreen(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  useEffect(()=>{
    if(screen<700){
      document.getElementById("img1").src=PortfolioPC;
      document.getElementById("img2").src=TaskifyPC;
      document.getElementById("img3").src=DTTPC;
      document.getElementById("img4").src=SSPC;
      document.getElementById("img5").src=QRPC;
      document.getElementById("img6").src=BMIPC;
    }else{
      document.getElementById("img1").src=PortfolioMB;
      document.getElementById("img2").src=TaskifyMB;
      document.getElementById("img3").src=DTTMB;
      document.getElementById("img4").src=SSMB;
      document.getElementById("img5").src=QRMB;
      document.getElementById("img6").src=BMIMB;
    }
  },[screen]);

 


  const b1 = useRef();
  const b2 = useRef();
  const b3 = useRef();
  const b4 = useRef();
  const b5 = useRef();
  const b6 = useRef();

  useEffect(() => {
    gsap.from(b1.current, {
      scrollTrigger: {
        trigger: b1.current,
        start: "top 70%",
        end: "bottom 10%",

      },
      x: -70,
      opacity: 0,
      duration: 1
    });
    gsap.from(b2.current, {
      scrollTrigger: {
        trigger: b2.current,
        start: "top 100%",
        end: "bottom 50%",

      },
      scale: 0.4,
      opacity: 0, delay: .3,
      duration: .8
    });
    gsap.from(b3.current, {
      scrollTrigger: {
        trigger: b3.current,
        start: "top 70%",
        end: "bottom 10%",

      },
      x: 70,
      opacity: 0,
      duration: 1
    });
    gsap.from(b4.current, {
      scrollTrigger: {
        trigger: b4.current,
        start: "top 70%",
        end: "bottom 10%",

      },
      x: -50,
      opacity: 0,
      duration: 1
    });
    gsap.from(b5.current, {
      scrollTrigger: {
        trigger: b5.current,
        start: "top 100%",
        end: "bottom 10%",

      },
      scale: 0.4,
      opacity: 0, delay: .3,
      duration: .8
    });
    gsap.from(b6.current, {
      scrollTrigger: {
        trigger: b6.current,
        start: "top 70%",
        end: "bottom 10%",

      },
      x: 70,
      opacity: 0,
      duration: 1
    })
  }, [])

  return (
    <div id='Projects'>
      <div className="header">
        <h1>RECENT WORK</h1><div className="under"></div>
        <h3> Discover various projects I've worked on, with its source code & live links. Checkout my <a href="https://github.com/Kunal-Rajp00t">GitHub</a> for more.</h3>
      </div>
      <div className="mainP">
        <div className="box" ref={b1}>
          <div className="text-Area">
            <h3>Portfolio</h3>
            It is a curated collection of my information, showcasing my projects and ability to create visually compelling and functional web experiences.
            <br /> <span>ReactJs, NodeJs, Interactive UI, GSAP</span>
            <br />
            <button onClick={() => { window.location.href = "https://google.com" }}>Source Code</button>
          </div>
          <a href="https://google.com" rel="noreferrer" target='_blank'><div className="tempDiv">Live Site</div></a>
          <div className="image-Area">
            <img id='img1' src={PortfolioMB} alt="" />
          </div>
        </div>
        <div className="box" ref={b2}>
          <div className="text-Area">
            <h3>Taskify</h3>
            It is a streamlined to-do list app that allows users to easily add and delete tasks. Its simple and intuitive interface ensures efficient task management and organization.
            <br /><span>ReactJs, Storage, React Router, Frontend</span>
            <br />
            <button onClick={() => { window.location.href = "https://github.com/Kunal-Rajp00t/Taskify" }}>Source Code</button>
          </div>
          <a href="https://taskifys.netlify.app/" rel="noreferrer" target='_blank'><div className="tempDiv">Live Site</div></a>
          <div className="image-Area"><img id='img2' src={TaskifyMB} alt="XXX" /></div>
        </div>
        <div className="box" ref={b3}> <div className="text-Area">
          <h3>DishTopTen</h3>
          It delivers the top ten recipe results based on your search query, providing you detailed information and complete recipes for each dish, making meal planning easy and tasty.
          <br /><span>REST APIs, NodeJs, ExpressJs</span>
          <br />
          <button onClick={() => { window.location.href = "https://github.com/Kunal-Rajp00t/DishTopTen" }} >Source Code</button>
        </div>
          <a href="https://dish-top-ten.vercel.app/" rel="noreferrer" target='_blank'><div className="tempDiv">Live Site</div></a>
          <div className="image-Area"><img id='img3' src={DTTMB} alt="" /></div></div>
        <div className="box" ref={b4}> <div className="text-Area">
          <h3>SkyScout</h3>
          This weather app gives you current weather conditions for any city you search, providing precise and timely updates.
          <br /><span>API Calls, DOM Manipulation, BootStrap</span>
          <br />
          <button onClick={() => { window.location.href = "https://github.com/Kunal-Rajp00t/SkyScout" }}>Source Code</button>
        </div>
          <a href="https://sky-scout.netlify.app" rel="noreferrer" target='_blank'><div className="tempDiv">Live Site</div></a>
          <div className="image-Area"><img id='img4' src={SSMB} alt="" /></div></div>
        <div className="box" ref={b5}> <div className="text-Area">
          <h3>Quickrate</h3>
          This app lets you seamlessly convert currencies from over 100 countries, offering real-time exchange rates to keep your finances on track wherever you go.
          <br /><span>JavaScript, Responsive Design, API Integration</span>
          <br />
          <button onClick={() => { window.location.href = "https://github.com/Kunal-Rajp00t/QuickRate---A-Real-Time-Currency-Converter" }}>Source Code</button>
        </div>
          <a href="https://quickrate.netlify.app/" rel="noreferrer" target='_blank'><div className="tempDiv">Live Site</div></a>
          <div className="image-Area"><img id='img5' src={QRMB} alt="" /></div></div>
        <div className="box" ref={b6}> <div className="text-Area">
          <h3>BMI Finder</h3>
          It quickly calculates your Body Mass Index and provides insights into your health status, helping you monitor and manage your wellness with ease.
          <br /><span>JavaScript, Calculation, User Input Validation</span>
          <br />
          <button onClick={() => { window.location.href = "https://github.com/Kunal-Rajp00t/BMIFinder" }}>Source Code</button>
        </div>
          <a href="https://findmybmi.netlify.app/" rel="noreferrer" target='_blank'><div className="tempDiv">Live Site</div></a>
          <div className="image-Area"><img id='img6' src={BMIMB} alt="" /></div></div>
      </div>
    </div>
  )
}

export default Projects
