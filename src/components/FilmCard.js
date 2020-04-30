import React from 'react'

const FilmCard = ({ title , poster_path , overview , popularity }) => {
  return ( 
    <div>
      <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${poster_path}`} width="200" height="300" alt={title} value={title}/>
    </div>
  )
}

export default FilmCard


















































