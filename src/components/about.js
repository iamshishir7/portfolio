import React from 'react'
import Typewriter from 'typewriter-effect'

function About() {
  return (
    <div className='about' id='about'>
      <h1>About Shishir &#128578;</h1>
      <div className='subhead'>
      <Typewriter
        options={{
        strings: ['Hello!!', 'This is me again..'],
        autoStart: true,
        loop: true,
          }}
      />
        </div>
      <img src='./assets/about.jpg'/ >
      <div className='about-intro'>I'm from Nepal and I moved to Australia in 2018.</div>
      <div className='about-para'>
        I was always fascinated with computers from a small age. I got my first personal computer when I was 10 years old. I was introduced to programming in my mid-school and studying bachelors of IT in Australia boosted my interest on it even further.
        Since then, I have worked on my skillsets to make myself ready for any future endeavours.
        <br/><br/>
        If you fancy a chat feel free to contact me:<br/>
        <a href='mailto:shishir.01@outlook.com'>shishir.01@outlook.com</a>
      </div>
    </div>
  )
}

export default About