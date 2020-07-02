import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <main>
      <div className='home-page center'>
        <div>
          <h1> WELCOME TO MOVIE RATER </h1>
          <Link to='/game' className='navbar-item'>
            <div className='home-div center'>
              <p> ENTER</p>
            </div>
          </Link>
        </div>
      </div>
    </main>
  )
}


export default Home