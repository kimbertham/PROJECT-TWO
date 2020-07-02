/* eslint-disable camelcase */
import React from 'react'
import axios from 'axios'
import { poster,oneMovie } from '../common'

class MovieShow extends React.Component {

state={
  movieData: []
}

async componentDidMount() {
  const movieId = this.props.match.params.id
  const res = await axios.get(`${oneMovie}${movieId}?api_key=${process.env.REACT_APP_MOVIES_KEY}&language=en-US`)
  const movieData = res.data
  this.setState({ movieData })
}

render() {
  const { movieData }  = this.state
  return (
    <main>
      <div className='movie-card center'>

        
        <img className='movie-img' 
          alt={movieData.title} 
          src={`${poster}${movieData.poster_path}`}/>

        <div className='movie-info'>
          <h1> {movieData.title}</h1>    
          <h2>{movieData.tagline}</h2>
          <br/>
          <p> Language: {movieData.original_language}</p>
          <p> Release year: {movieData.release_date}</p>
          <p> Genres: 
            {movieData.genres ?
              movieData.genres.map(genre => {
                return ` ${genre.name}, `
              }) : ''}
          </p> 
          <p> Production: 
            {movieData.production_companies ? 
              movieData.production_companies.map(comp => {
                return ` ${comp.name},`
              }) : ''}
          </p>
          <p>Runtime: {movieData.runtime} mins </p>
          <p>Vote average: { movieData.vote_average}/10 </p>
          <br/>
          <p> Overview: <br/> {movieData.overview}</p>
        </div>

      </div>
    </main>
  )
}
}
export default MovieShow