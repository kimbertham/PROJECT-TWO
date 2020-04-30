import React from 'react'

const MovieCard = ({ title, poster_path }) =>{
  return (
    
    <div className='card-container'>
      <div className='movie-title'>
        <p>{title}</p>
      </div>
      <img className='movie-img' src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${poster_path}`} />
    </div>
  )
}
export default MovieCard