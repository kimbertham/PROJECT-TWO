import React from 'react'
import axios from 'axios'

class MovieShow extends React.Component {
state={
  movieData: []
}

async componentDidMount() {
  const movieId = this.props.match.params.id
  const movieData = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=a6f34e87c9902a29316fd7cff8f50328&language=en-US`)
  this.setState({ movieData: movieData.data })
}

render() {
  console.log(this.state.movieData)
  const { poster_path, title, original_language, release_date, overview, tagline } = this.state.movieData
  return (
    <div className='show-container'>
      <div className='movie-card'>
        <div className ='movie-image'>
          <img className='movie-img' src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${poster_path}`}/>
        </div>

        <div className='movie-info'>
          <div className='title'> {title}</div>

          <div className='info-text'>
            <p>{tagline}</p>
            <p> Language {original_language}</p>
            <p> Release year: {release_date}</p>
            <p> Overview: {overview}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
}
export default MovieShow