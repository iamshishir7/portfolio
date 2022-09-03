import React from 'react'
import '../App.scss'
import {HashLink as Link} from 'react-router-hash-link'

function Header() {
  return (
    <div className='header'>
        <div className='leftcontent'>
            <div className='logo'>
            <span>Portfolio</span> by Shishir
            </div>
        </div>

        <div className='rightcontent'>
            <div className='projectlabel'><Link to='#projects' smooth>Projects</Link></div>
            <div className='contactlabel'><Link to='#about' smooth>About</Link></div>
        </div>
    </div>
  )
}

export default Header