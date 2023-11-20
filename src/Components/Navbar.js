import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between nav-ele items-center'>
        <Link to="/"><h1>#VANLIFE</h1></Link>
      <ul className='flex'>
        <li><Link to='/about'>About</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
