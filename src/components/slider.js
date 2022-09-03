import React from 'react'
import Intro from '../cards/intro'
import Contact from '../cards/contact'
import {motion} from 'framer-motion'
import {useRef, useEffect, useState} from 'react'

function Slider() {
  const [width, setWidth] = useState(0);
  const slider = useRef();

  useEffect(() => {
    setWidth(slider.current.scrollWidth - slider.current.offsetWidth);
  },[]);

  return (
    <motion.div ref={slider} whileTap={{cursor:"grabbing"}} className='slider' initial={{x: '100vw'}} animate={{x:0}} transition={{type:'easeIn', duration:  1}}>
      <motion.div drag="x" dragConstraints={{ right:0, left: -width }} className='inner-slider'>
      <div className='content'>
        <Intro/>
        </div>
        
        <div className='content'>
            <Contact/>
        </div>
      </motion.div>
        
    </motion.div>
  )
}

export default Slider