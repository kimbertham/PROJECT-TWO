import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <main>
      <div className='home-container'>
        <div className='home-page'>
          <div className='home-intro'>
            <h1> WELCOME TO MOVIE RATER </h1>
            <Link to='/game' className='navbar-item'>
              <div className='home-div'>
                <p> ENTER</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>

  )
}


export default Home