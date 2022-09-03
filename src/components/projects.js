import React from 'react'
import {motion, useAnimation} from 'framer-motion'
import {useInView} from 'react-intersection-observer'
import {useEffect} from 'react'


function Projects() {

  const {ref, inView } = useInView();

  const animation = useAnimation();

  useEffect(() => {
    console.log('use effect hook, inView=', inView);
    
    if(inView){
      animation.start({ 
        x:0,
        transition:{
          type:'easeIn',duration: 0.5
        },
        opacity:100
      })
    } 

    if(!inView){
      animation.start({
        x:'-50vw',
        opacity:0
      })
    } 
  },[inView]);
  
  
  return (
    <div  ref={ref} className='projects' id='projects'>
        <h1>Projects</h1>
        <div className='sub-head'>Every developer starts from scratch. Here are some of the projects that have helped me learn the world of development</div>
        
        <motion.div animate={animation} className='project-container' >
          
          <div className='project1 bg-project'>
            
            <img src='/assets/musicplayer.jpg' width={300}/>
            <h2 >Music Player</h2>
            <div className='project-intro'>
            What if you tried making a music player that doesn't just let you play tracks, but also makes personalized mixes like Spotify? In addition to this app also have unique features like for example, making a "bangers" mix that compiles the tracks that you've cranked up your volume for.
            </div>
          </div>
          

          
          <div className='project2 bg-project'>
          
          <img src='/assets/stocktracker.png' width={300}/>
          <h2>Stock Tracker</h2>
            <div className='project-intro'>
            This is one of the simple projects on this list, yet one that is very versatile. Its a Web App that visualizes live data fetched from an API. This is, for example, a financial data API where you would visualize the most traded stocks by volume.
            </div>
          </div>
          

          
          <motion.div className='project3 bg-project'>
          
          <img src='/assets/blog.jpg' width={300}/>
          <h2>Personal Blog</h2>
            <div className='project-intro'>
            Blogs are much appreciated across the internet. Blogs can be very valuable for businesses. Personal blogs have been made like a million times by Web Devs, but user-generated blogs like dev.to that have a built-in markdown editor, review algorithm and everything else needed to have a self-sustaining blog is something not many have made, yet is something that is a lot more valuable to businesses that want their blog to grow organically and bring in traffic. This is exactly what my project is.
            </div>
          </motion.div>
          

         
          <div className='project4 bg-project'>
          
          <img src='/assets/newsletter.png' width={300}/>
          <h2>News from Shishir</h2>
            <div className='project-intro'>
            Just like with product landing pages, making great newsletter landing pages is a valuable Web Dev skill. This newsletter application has a fantastic landing page in order to get those required clicks.
            </div>
          </div>
          
          
        </motion.div>
    </div>
  )
}

export default Projects