import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <>
    <div className='nav-bar center'>
      <h1>MoviRater</h1> 
      <ul className='nav-options center'>
        <Link to='/' className='navbar-item'> <p> Home</p>  </Link>
        <Link to='/movies' className='navbar-item'> New Movies! </Link>
        <Link to='/game' className='navbar-item'> Guess Movie Ratings! </Link>
      </ul>
    </div>
  </>
  
)

export default Header