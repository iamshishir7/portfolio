import React from 'react'

import './cards.scss'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {AiOutlineFacebook} from 'react-icons/ai'
import {FiTwitter} from 'react-icons/fi'
import {AiOutlineInstagram} from 'react-icons/ai'
import Typewriter from 'typewriter-effect';

function Intro() {
  return (
    <div className='intro'>
        <div>
          <div className='hi'>
              Hi,
          </div>
          <div className='fname'>
              I am <span>Shishir Timalsina</span>
          </div>
          <div className='caption'>
          Self-driven, enthusiastic
          <span>
          <Typewriter
          options={{
          strings: ['Web Developer', 'Software Developer', 'Full-Stack Developer'],
          autoStart: true,
          loop: true,
          }}
          />
          </span>
          </div>

         

          <div className='socials'>
          <a href='https://www.linkedin.com/in/iamshishir7/' target="_blank"><AiOutlineLinkedin size={33} color='#0072b1'/></a>
          <a href='https://www.facebook.com/iamshishir7/' target="_blank"><AiOutlineFacebook size={33} color='#3b5998'/></a>
          <a href='https://www.twitter.com/iamshishir7/' target="_blank"><FiTwitter size={33} color='#00acee'/></a>
          <a href='https://www.instagram.com/iamshishir7/' target="_blank"><AiOutlineInstagram size={33} color='#bc2a8d'/></a>
          </div>

          <div className='coreskillstitle'>Core Skills</div>

          <div className='coreskills'>
              <div className='JS'><img src='/assets/js.png' width={80}/><br/><span>Javascript</span></div>
              <div className='Csharp'><img src='/assets/csharp.png' width={80}/><br/><span>C Sharp</span></div>
              <div className='React'><img src='/assets/react.png' width={80}/><br/><span>ReactJS</span></div>
              <div className='nodejs'><img src='/assets/nodejs.png' width={150}/><br/><span>NodeJS</span></div>
          </div>
        </div>
        <div className='profilepic'>
          <img src='./assets/intro.jpg' draggable='false' width={500}/>
        </div>


    </div>
  )
}

export default Intro