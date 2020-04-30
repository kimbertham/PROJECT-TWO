import React from 'react'
import FilmCard from './FilmCard'
import FilmChoice from './FilmChoice'


const Main = () => {
  return (

    <main>
      <div className='main-container'>
        <h1>Movie Rater or st</h1>
        <h2> info about game how to play blah blah alla dat</h2>
        <div className='game-container'>
          <div className='left-container'>
            <hr />
            <div className='left-movie'>
              <FilmChoice />
            </div>
          </div>

          
          <div className='right-container'>
            <div className='right-movie'>
              <FilmChoice />
            </div>
          </div>
        </div>  
      </div>
      <div className='winner-container'>
        <div className='winner-movie'></div>
      </div>
    </main>
  )
}


export default Main 