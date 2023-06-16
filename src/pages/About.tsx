import React from 'react'
import Image from 'next/image'
import Head from "next/head";
import "./About.css"
import profile_img from "src/img/1..jpeg";

const About = () => {
  return (
    <>
    <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Anton&family=Urbanist:wght@200;400;500&display=swap" rel="./BodyHome.css"/>
    </Head>
    <section id='about' className='about'>
      <div className='about-container'>
        <Image className='about-photo' src={profile_img} alt = "no img"/>
        <div className='about-description'>
          <h1 className='about-heading'>About Me</h1>
          <p className='about-me'>
            As a MERN stack developer, my job is to build modern and scalable web applications using four main technologies: MongoDB, Express, React, and Node.js. I work on both the frontend and backend aspects of the application, 
            using my skills in HTML, CSS, and JavaScript to create a user-friendly and visually appealing interface. <br/>
            &emsp; &emsp;Overall, my job as a MERN stack developer is to build robust and scalable web applications that meet the needs of 
            clients and users. I work closely with designers, project managers, and other developers to ensure that the application meets the requirements and specifications, and is delivered on time and within budget.<br/><br/>
            Skills: MERN stack, C++ and python

          </p>
        </div>
      </div>
    </section>
    </>
  )
}

export default About