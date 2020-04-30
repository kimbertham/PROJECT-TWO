import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <>
      <main>
        <div className='home-page'>
          <h1> WELCOME TO MOVIE RATER </h1>
          <Link to='/game' className='navbar-item'>
            <div className='home-div'>
              <p> Start Rating Movies!</p>
            </div>
          </Link>
        </div>
      </main>
    </>
  )
}


export default Home