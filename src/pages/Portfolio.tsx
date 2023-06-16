"use client";
import {BsGithub} from 'react-icons/bs'
import webcert_img from "src/img/webhacking.png";
import aws_img from "src/img/aws_coursera.png";
import cranes_img from "src/img/cranes_varsity.png";
import sidalceas_img from "src/img/sidalceas.jpeg";
import dpsd_img from "src/img/dpsd.jpg"
import React, { useState } from 'react'
import Image from 'next/image';
import Head from "next/head";
import "./Portfolio.css";
 

const Portfolio = () => {
    return (
    <>
    <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Anton&family=Urbanist:wght@200;400;500&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Anton&family=Urbanist:wght@200;400;500&display=swap" rel="./BodyHome.css"/>
    </Head>
    
    <section id="portfolio" className='portfolio'>
        <div className='container-port'>
            <div className='projects'>
                <h1 className='portfolio-proj'>PROJECTS</h1>
                <div className='project-grid'>
                    <div className='card-1' >
                        <h3 style={{height : "3.5em" ,overflow : "hidden", zIndex : "2", fontWeight : "bolder", fontSize : "210%"}}>Outlay Manager</h3>

                            <div className='inside-project-card-descrip'> 
                                <p>The application allows users to enter and track their expenses by recording details such as date, amount, description, 
                                    and category.  Users can categorize expenses into different predefined or custom categories (e.g., groceries, transportation, entertainment). 
                                    Tags can be used to further classify expenses for more detailed analysis.
                                    <br/><br/>
                                    <a href="https://github.com/git-divyansh/Outlay-manager" style={{color : "white", overflow : "hidden", display : "flex", justifyContent : "center"}}><BsGithub style={{height : "60px", width : "60px"}}/></a>
                                </p> 
                            </div>
                    </div>
                    <div className='card-1' >
                        <h3 style={{height : "3.5em" ,overflow : "hidden", zIndex : "2", fontWeight : "bolder", fontSize : "210%"}}>MindScribe</h3>

                            <div className='inside-project-card-descrip'> 
                                <p>MindScribe is a comprehensive note-taking application designed to enhance your productivity and simplify the way you capture, 
                                    organize, and manage your notes. Whether you're a student, professional, or anyone seeking an efficient way to keep track of your 
                                    thoughts and information, NotesMaster is here to revolutionize your note-taking experience.
                                    <br/><br/>
                                    <a href="https://github.com/git-divyansh/MindScribe" style={{color : "white", overflow : "hidden", display : "flex", justifyContent : "center"}}><BsGithub style={{height : "60px", width : "60px"}}/></a>
                                </p> 
                            </div>

                    </div>
                    <div className='card-1' >
                        <h3 style={{height : "3.5em" ,overflow : "hidden", zIndex : "2", fontWeight : "bolder", fontSize : "210%"}}>Dr.Medicine</h3>

                            <div className='inside-project-card-descrip'> 
                                <p>Our system also caters to the needs of the youth and people of all ages by providing information on side effects and alternative medicines. 
                                    This increased awareness empowers individuals to make informed decisions regarding their healthcare, ensuring they take the appropriate medications 
                                    for their specific.
                                    <br/><br/>
                                    <a href="https://github.com/git-divyansh/Epics-proj" style={{color : "white", overflow : "hidden", display : "flex", justifyContent : "center"}}><BsGithub style={{height : "60px", width : "60px"}}/></a>
                                </p> 
                            </div>

                    </div>
                    <div className='card-1'>
                        <h3 style={{height : "3.5em" ,overflow : "hidden", zIndex : "2", fontWeight : "bolder", fontSize : "210%"}}>URLock</h3>
                        <div className='inside-project-card-descrip'> 
                            <p>A URL blocking script is a piece of code that can be used to prevent access to specific websites or URLs. It typically 
                                operates at the network or browser level and can be employed for various purposes, such as enforcing internet usage policies, 
                                improving productivity, or protecting against malicious content.
                                <br/><br/>
                                <a href="https://github.com/git-divyansh/Circuit-Level-Firewall" style={{color : "white", overflow : "hidden", display : "flex", justifyContent : "center"}}><BsGithub style={{height : "60px", width : "60px"}}/></a>
                            </p> 
                        </div>
                    </div>
                </div>
            </div>
            <div className='experience'>
                <h1 className='portfolio-exp'>EXPERIENCE</h1>
                <div className='project-grid-2'>
                    <div className='card-2'>
                        <Image className="inside-exp-img" src={sidalceas_img} alt="no"/>
                        <div className="inside-exp-descrip">
                            <h1 style={{display: "flex", justifyContent : "center", fontWeight : "bold", marginBottom : "1rem"}}>Role</h1>
                            <p>The internship consisted of collecting information regarding various tech topics 
                                and analyzing the data to form a report. Conducting comprehensive literature reviews 
                                to gather existing knowledge and research findings related to your project area. 
                                <br></br>
                                <br></br>
                            </p>
                            <p style={{fontSize : "70%"}}>Tenure : November(2022) - December(2022)</p>
                            <p style={{fontSize : "70%"}}>Role : Researcher</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='certification'>
                <h1 className='portfolio-cert'>CERTIFICATION</h1>
                <div className='project-grid-2'>
                    <div className='card-2'>
                        <div className='web-hacking'>
                            <h1 className="inside-cert-heading">Web Hacking</h1>
                            <div className='inside-cert-div1'>
                                <a href="https://drive.google.com/file/d/1fz1p59PhwfgnJQiDRNagRZBABcJ2HSS8/view?usp=sharing"> 
                                
                                <Image 
                                    className='inside-cert-img'
                                    src={webcert_img} alt='no'
                                />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='card-2'>
                        <div className='web-hacking'>
                                <h1 className="inside-cert-heading">Data Analytics</h1>
                                <div className='inside-cert-div1'>
                                    <a href="https://drive.google.com/file/d/1pr1KRqK1Kxp112lErLrv5MkZTXypim9_/view?usp=sharing"> 
                                    <Image 
                                        className='inside-cert-img'
                                        src={aws_img} alt='no'
                                    />
                                    </a>
                                </div>
                            </div>
                        </div>
                    <div className='card-2'>
                        <div className='web-hacking'>
                            <h1 className="inside-cert-heading">Crane Varsity</h1>
                            <div className='inside-cert-div1'>
                                <a href="https://drive.google.com/file/d/1fz1p59PhwfgnJQiDRNagRZBABcJ2HSS8/view?usp=sharing"> 
                                <Image 
                                    className='inside-cert-img'
                                    src={cranes_img} alt='no'
                                />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Portfolio