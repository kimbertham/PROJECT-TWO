import React from 'react'
import axios from 'axios'
import FilmCard from '../components/FilmCard'
// import GameLogic from './GameLogic'

class FilmChoice extends React.Component{
  state= {
    movieOne: { },
    movieTwo: { }, 
    winner: ''
  }

comparePop = () => {
  const movieOnePop = this.state.movieOne.popularity
  const movieTwoPop = this.state.movieTwo.popularity
  console.log(movieOnePop)
  console.log(movieTwoPop)


  if ( movieOnePop > movieTwoPop) {
    const winner = this.state.movieOne.title
    console.log('heeeey')
    this.setState(  { winner }  ) 
  } else {
    console.log('hoooooo')
    const winner = this.state.movieTwo.title
    this.setState(  { winner }  ) 

  }

  // if (this.state.movieOne.popularity > this.state.movieTwo.popularity){
  //   console.log(this.state.movieOne.name)
  //   return this.state.movieOne.name
  // } else {
  //   console.log(this.state.movieTwo.name)
  //   return this.state.movieTwo.name
  // }
}



async componentDidMount() {
  const numPage = Math.floor(Math.random() * 5)
  const numFilm = Math.floor(Math.random() * 20)
    
  try {
    const res = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=9d98d11acbe50d0fea04f4ec6a695022&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${numPage}1&with_original_language=en`)
    const movieOne = res.data.results[numFilm]
    const movieTwo = res.data.results[numFilm + 1]
    this.setState({ movieOne , movieTwo })
    this.comparePop()
    // console.log(movieOne.popularity)
    // console.log(movieTwo.popularity)
  } catch (err) {
    console.log(err)
  }
}

render() {
  return (
    <main> 
      <div className='main-container'>
        <h1>Movie Rater or st</h1>
        <h2> info about game how to play blah blah alla dat</h2>
          
        <div className='game-container'>
        
          <div className='left-container'>
            <div className='left-movie'>
              <FilmCard {...this.state.movieOne} />
            </div>
            <button>Click</button>
          </div>

          <div className='right-container'>
            <div className='right-movie'>
              <FilmCard {...this.state.movieTwo} />
            </div>
          </div>
            
        </div>  
        <div>
          <p> {this.state.winner}</p>
        </div>

      </div>
    </main>
      
  )
}
}


export default FilmChoice