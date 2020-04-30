import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <header>
    <div className='nav-bar'>
      <h1 className='title'>Movie Rater</h1> 
      <ul className='nav-options'>
        <Link to='/' className='navbar-item'> <p> Home</p>  </Link>
        <Link to='/movies' className='navbar-item'> New Movies! </Link>
        <Link to='/game' className='navbar-item'> Guess Movie Ratings! </Link>
        <li>Drink</li>
      </ul>
    </div>
  </header>
  
)

export default Header