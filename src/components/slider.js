import React from 'react'
import Intro from '../cards/intro'
import Contact from '../cards/contact'
import {motion} from 'framer-motion'
import {useRef, useEffect, useState} from 'react'
import {HiArrowCircleRight} from 'react-icons/hi'

function Slider() {
  const [width, setWidth] = useState(0);
  const slider = useRef();

  useEffect(() => {
    setWidth(slider.current.scrollWidth - slider.current.offsetWidth);
  },[]);

  const bounceTransition ={
    x: {
      duration: 0.4,
      yoyo: Infinity,
      ease: "easeOut"
    }
  };

  return (
    <div>
    <div className='dragtext'><motion.p 
    transition={bounceTransition}
    animate={{x:['0%','-2%']}}
    >DRAG TO REVEAL<HiArrowCircleRight/></motion.p> </div>
    <motion.div ref={slider} whileTap={{cursor:"grabbing"}} className='slider' initial={{x: '100vw'}} animate={{x:0}} transition={{type:'easeIn', duration:  0.5}}>
      <motion.div drag="x" dragConstraints={{ right:0, left: -width }} className='inner-slider'>
      <div className='content'>
        <Intro/>
        </div>
        
        <div className='content'>
            <Contact/>
        </div>
      </motion.div>
        
    </motion.div>
    </div>
  )
}

export default Slider