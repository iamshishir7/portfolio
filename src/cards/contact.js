import React from 'react'
import {MdEmail} from 'react-icons/md'
import {MdPhone} from 'react-icons/md'
import emailjs from 'emailjs-com'

function Contact() {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7g5zdca','template_q52l79x',e.target,'u2her-NhXab-2Bkp0').catch(err=>console.log(err));

    e.target.reset();

    
  }

  return (

    
    <div className='contact'>
      
      <div class="form">
      <h1>Say Hello!</h1>
      
      <form id="submit-form" onSubmit={sendEmail}>
        <p>
          <input name="name" class="form-input" type="text" placeholder="Your Name*"/>
          <small class="name-error"></small>
        </p>
        <p>
          <input name="email" class="form-input" type="email" placeholder="Your Email*"/>
          <small class="name-error"></small>
        </p>
        <p class="full-width">
          <input name="company-name" class="form-input" type="text" placeholder="Company Name*" required/>
          <small></small>
        </p>
        <p class="full-width">
          <textarea  name='message' minlength="20" id="message" cols="30" rows="7" placeholder="Your Message*" required></textarea>
          <small></small>
        </p>
        
        <p class="full-width">
          <input type="submit" class="submit-btn" value="Submit" onclick="checkValidations()"/>
          
        </p>
      </form>
    </div>

    <div class="contacts contact-wrapper">

      <ul>
        <li>Also <span class="highlight-text-grey">contact me</span> through my email or phone number.</li>
        <span class="hightlight-contact-info">
          <li class="email-info"><MdEmail/> shishir.01@outlook.com</li>
          <li><MdPhone/> <span class="highlight-text">+61 452 400 147</span></li>
        </span>
      </ul>
    </div>
    </div>
    
  )
}

export default Contact