import React, { useRef } from 'react'
import './solves.css'
import { gsap } from 'gsap'
import { useEffect } from 'react'
import bgVideo from './Images/bgvideo.mp4'

const Solves = () => {
    const l1 = useRef(null);
    const l2 = useRef(null);
    const l3 = useRef(null);
    const l4 = useRef(null);

    useEffect(() => {
        gsap.from(l1.current, {
            scrollTrigger: {
                trigger: l1.current,
                start: "top 70%",
                end: "bottom 20%",
            },
            rotate: -360,
            duration: 1.2,
            ease: "expo.out"
        });
        gsap.from(l2.current, {
            scrollTrigger: {
                trigger: l2.current,
                start: "top 70%",
                end: "bottom 20%",
            },
            rotate: 360,
            duration: 1.2,
            ease: "expo.out"
        });
        gsap.from(l3.current, {
            scrollTrigger: {
                trigger: l3.current,
                start: "top 70%",
                end: "bottom 20%",
            },
            rotate: -360,
            duration: 1.5,
            ease: "expo.out"
        });
        gsap.from(l4.current, {
            scrollTrigger: {
                trigger: l4.current,
                start: "top 70%",
                end: "bottom 20%",
            },
            rotate: 360,
            duration: 1.2,
            ease: "expo.out"
        });
    }, []);
    return (
        <div className='mainSolves' id='solves'>
            <div className="solvesHeader">
                <h1>PROBLEMS I'VE SOLVED</h1><div className="under"></div>
                <h3> While mastering technology, I understand the value of practical problem-solving. I am committed to dedicating more time to challenges to sharpen my skills and deliver innovative solutions. </h3>
            </div>

            <div className="solvesBody">
                <video autoPlay muted loop className='backgroundVideo'>
                    <source src={bgVideo} type="video/mp4" />
                </video>
                <div className="content">
                <div className="wBox">
                    <div className="line" ref={l1}></div>
                    <h2 className="headText">LEETCODE</h2>
                    <div className="mainText">I have actively engaged with LeetCode to sharpen my <span className="special">problem-solving skills</span> and <span className="special">algorithmic thinking</span>. I've solved over <span className="special">500+ problems</span>  and achieved a highest contest rating of 1550+. My dedication to continuous improvement is reflected in the numerous badges I've earned, showcasing my proficiency in various programming concepts and data structures. <a href="https://leetcode.com/u/Kunal_Rajput_/" target='_blank' rel="noreferrer">Visit Profile</a> </div>
                </div>
                <div className="wBox2">
                    <div className="line" ref={l2}></div>
                    <h2 className="headText2">GFG</h2>
                    <div className="mainText">On GeeksforGeeks, I solve the daily <span className="special">Problem of the Day</span> and participate in contests regularly. This consistent practice helps me stay sharp and continuously improve my coding skills, while also earning recognition through various achievements and badges. <a href="https://www.geeksforgeeks.org/user/kunalheni1h/" target='_blank' rel="noreferrer">Visit Profile</a></div>
                </div>
                <div className="wBox">
                    <div className="line" ref={l3}></div>
                    <h2 className="headText">CODECHEF</h2>
                    <div className="mainText">I also sometimes try CodeChef for my DSA practice. It provides a diverse range of problems that help me enhance my data structures and algorithms skills, contributing to my overall growth as a <span className="special">competitive programmer</span>. <a href="https://www.codechef.com/users/kunal_rajput7" target='_blank' rel="noreferrer">Visit Profile</a></div>
                </div>
                <div className="wBox2">
                    <div className="line" ref={l4}></div>
                    <h2 className="headText2">HACKER RANK</h2>
                    <div className="mainText">HackerRank was my initial platform for coding practice as it is best for beginners. I achieved a 5-star <span className="special">Problem Solving Badge</span>, a 4-star <span className="special">Java Programming Badge</span>, and a 2-star C Language badge. Additionally, I have earned several certificates, highlighting my proficiency, consistency and commitment to continuous learning. <a href="https://www.hackerrank.com/profile/kunalhere1234" target='_blank' rel="noreferrer">Visit Profile</a></div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Solves
