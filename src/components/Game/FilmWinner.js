import React from 'react'

const FilmWinner = ({ showScore, outcome, winner, getData }) => {
  return (

    <div className={`${showScore ? 'results' : 'no-show'}`}> 


      <p className='outcome'> 
        <span className='outcome-span'>{outcome}</span>
        <br/>
        <span className='winner-span'>{winner}</span>  has a higher popularity rating!
      </p>

      <button onClick={getData} 
        className='nextButton'>
        <p>{'> > >'}</p>
      </button>


    </div>
  )
}
export default FilmWinner