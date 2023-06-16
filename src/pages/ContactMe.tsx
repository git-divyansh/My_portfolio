
"use client";
import "./ContactMe.css"
import Head from "next/head";
import React, { useRef, useState } from "react";
import "./reused.css";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const form = useRef(0);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onclickClear = () =>{
    setName("");
    setEmail("");
    setMessage("");
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_y9l0t95', 'template_4ye3p1d', ".contact-form", 'SUQRLJ1yAKSGIa1j6')
      .then((result) => {
          console.log(result.text);
          onclickClear();
          alert("Your reponse has been recorded");
      }, (error) => {
          console.log(error.text);
      });
  };
  
  return (
    <>
      <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Anton&family=Urbanist:wght@200;400;500&display=swap" rel="./BodyHome.css"/>
      </Head>
      <section id='contact' className='contactme'>
      <div className="inner">
							<section>
								<form className="contact-form" onSubmit={e =>sendEmail(e)}>
									<div className="fields">
										<div className="field half">
											<label className="name">Name</label>
											<input type="text" name="user_name" id="name" onChange={(e)=>setName(e.currentTarget.id)}/>
										</div>
										<div className="field half">
											<label className="email">Email</label>
											<input type="email" name="user_email" id="email" onChange={(e)=>setEmail(e.currentTarget.id)}/>
										</div>
										<div className="field">
											<label className="message">Message</label>
											<textarea name="message" id="message" onChange={(e)=>setMessage(e.currentTarget.id)}></textarea>
										</div>
									</div>
									<ul className="actions">
										<li><input type="submit" value="Send" className="primary" /></li>
										<li><input type="reset" value="Clear" onClick={()=>onclickClear()} /></li>
									</ul>
								</form>
							</section>
							<section className="split">

							</section>
						</div>
      </section>
    </>
  )
}

export default ContactMe