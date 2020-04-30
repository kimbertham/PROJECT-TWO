import React from 'react'
import axios from 'axios'
import FilmCard from '../components/FilmCard'

class FilmChoice extends React.Component{
  state= {
    movie: { }

  }
  

  async componentDidMount() {
    const num = Math.floor(Math.random() * 20)
  
    try {
      const res = await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=9d98d11acbe50d0fea04f4ec6a695022&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_original_language=en')
      const movie = res.data.results[num]
      await this.setState({ movie })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    console.log(this.state.movieOne)
    return (
      <div>
        <FilmCard {...this.state.movie} />
      </div>
    )
  }
}


export default FilmChoice