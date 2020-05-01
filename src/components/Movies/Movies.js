import React from 'react'
import axios from 'axios'
import MovieCard from './MoviesCard'


class Movies extends React.Component {
  state = {
    moviePage: []
  }

  async componentDidMount() {
    const res = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=a6f34e87c9902a29316fd7cff8f50328&language=en-US&page=1')
    this.setState( { moviePage: res.data.results })
  }
test = () => {
  console.log('hi')
}

render(){
  console.log(this.state.moviePage)
  return (
    <>
      <header className='movies-header'>
        <div className='title'>
          <h1> New Movies</h1>
        </div>
      </header>


      <div className='movie-container'>
        <div className='lined-movies'>
          {this.state.moviePage.map(movie =>{
            return <MovieCard onClick={this.test} key={movie.id} {...movie}/>
          })}
        </div>
      </div>
    </>
  )
}
}

export default Movies