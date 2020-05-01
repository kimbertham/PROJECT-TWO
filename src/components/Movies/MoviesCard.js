import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = ({ title, poster_path, id  }) =>{
  return (
    
    < Link to={`/info/${id}`}> 
      <div className='card-container'>
        <div className='movie-title'>
          <p>{title}</p>
        </div>
        <img className='movie-img' src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${poster_path}`} />
      </div>
    </Link>
  )
}
export default MovieCard