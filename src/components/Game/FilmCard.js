/* eslint-disable camelcase */
import React from 'react'
import { poster } from '../common'

const FilmCard = ({ poster_path, outcome, title, showScore, popularity, winner, flash  }) => {
  return ( 
    <>
    
      <img src={`${poster}${poster_path}`} 
        alt={title}
        className={ 
          `movie-poster 
          ${winner === title && flash === true ? 'movie-flash' : ''}
          ${winner !== title && flash === true ? 'movie-dim' : '' }` 
        }/>

      <button
        onClick={()=> outcome( title )}
        className='chooseButton'>
        <p>{showScore ? `${ popularity }` : `${ title }`} </p>
      </button>

    </>
  )
}

export default FilmCard


















































