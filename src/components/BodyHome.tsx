import React from 'react'
import Head from "next/head";
import Navbar from './Navbar'
import Image from 'next/image';
import background_img from "src/img/background.jpg";
import {BsLinkedin, BsInstagram, BsGithub} from 'react-icons/bs'
import {SiGmail, SiLeetcode, SiGeeksforgeeks} from "react-icons/si"
import "./BodyHome.css"
const socials = [
    {
        id : "linkedIn",
        style : {
            margin: "2%", 
            textDecoration : "none", 
            color : "black"
        },
        href : "https://www.linkedin.com/in/divyansh-gusain-62294921b",
        icontag : <BsLinkedin className='contact-icon'/>

    },
    {
        id : "insta",
        style : {
            margin: "2%", 
            textDecoration : "none", 
            color : "black"
        },
        href : "https://www.instagram.com/trackk_pad/",
        icontag : <BsInstagram className='contact-icon'/>
    }
    ,
    {
        id : "github",
        style : {
            margin: "2%", 
            textDecoration : "none", 
            color : "black"
        },
        href : "https://github.com/git-divyansh",
        icontag : <BsGithub className='contact-icon'/>
    },
    {
        id : "gmail",
        style : {
            margin: "2%", 
            textDecoration : "none", 
            color : "black"
        },
        href : "mailto:divyanshwork2022@gmail.com",
        icontag : <SiGmail className='contact-icon' />
    }
]
const BodyHome = () => {

    

  return (
    <>
    <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Anton&family=Urbanist:wght@200;400;500&display=swap" rel="./BodyHome.css"/>
    </Head>
    
    <section id='home' className='body'>
        <Image  className='photo' src = {background_img} alt = "no_img" style={{position : "absolute"}}/>
        <div>
            <div className='container'>
                <Navbar/>
                <div className='intro'>
                    <p className='first-intro'>I am Divyansh Gusain</p>
                    <p className='second-intro'>I am a Frontend Developer</p>
                </div> 
                <div className="social-panel">
                   <>
                        {socials.map(x=>{
                            return(
                            <div key={x.id} className='social-media-divs'>
                                <a key={x.id} style ={x.style} href = {x.href}>{x.icontag}</a>
                            </div>
                        )})}
                   </>
                </div>    
            </div>
        </div>
    </section>
    </>
  )
}

export default BodyHome