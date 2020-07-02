/* eslint-disable camelcase */
import React from 'react'
import { Link } from 'react-router-dom'
import { poster } from '../common'

const MovieCard = ({ title, poster_path, id  }) =>{
  return (
    
    < Link to={`/info/${id}`}> 
      <div className='card-container'>
        <div className='movie-title'>
          <p>{title}</p>
        </div>

        <img className='movie-img' 
          src={`${poster}${poster_path}`} 
          alt={title} />
          
      </div>
    </Link>
  )
}
export default MovieCard