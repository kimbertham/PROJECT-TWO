import React from 'react'
import axios from 'axios'
import FilmCard from '../components/FilmCard'
import { randomNum } from '../lib/api'
// import GameLogic from './GameLogic'

class FilmChoice extends React.Component{
  state= {
    movieOne: { },
    movieTwo: { }, 
    winner: '',
    outcome: ''
  }

  functionTest = (event) => {
    const userChoice = event.target.value
    if (userChoice === this.state.winner){
      console.log('nice job')
      this.setState({ outcome: 'nice ' })
    } else {
      console.log('dum dum')
      this.setState({ outcome: 'wrong ' })
    }
  }



comparePop = () => {
  const movieOnePop = this.state.movieOne.popularity
  const movieTwoPop = this.state.movieTwo.popularity
  if ( movieOnePop > movieTwoPop) {
    const winner = this.state.movieOne.title
    this.setState(  { winner }  ) 
  } else {
    const winner = this.state.movieTwo.title
    this.setState(  { winner }  ) 
  }
}


// filmNum = () => {
//   const filmOneNum = Math.floor(Math.random() * 20)
//   const filmTwoNum = Math.floor(Math.random() * 20)
//   if (filmOneNum === filmTwoNum){
//     this.filmNum()
//   } else {
//     return 
//   }
// }


async componentDidMount() {
  const numPage = Math.floor(Math.random() * 5)

  try {
    const res = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=9d98d11acbe50d0fea04f4ec6a695022&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${numPage}1&with_original_language=en`)

    const firstNumber = Math.floor(Math.random() * 20)
    const secondNumber = 0
    randomNum(firstNumber, 0)
    const movieOne = res.data.results[firstNumber]
    const movieTwo = res.data.results[secondNumber]
    this.setState({ movieOne , movieTwo })
    this.comparePop()
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
            <div className='left-movie' value='movieOne'>
              <hr/>
              <FilmCard  {...this.state.movieOne} />
              <button onClick={this.functionTest} value={this.state.movieOne.title} className="chooseButton">{this.state.movieOne.title}</button>
            </div>
          </div>

          <div className='right-container'>
            <div onClick={this.functionTest}  className='right-movie'>
              <FilmCard {...this.state.movieTwo} />
              <button onClick={this.functionTest} value={this.state.movieTwo.title} className="chooseButton">{this.state.movieTwo.title}</button>
            </div>
          </div>
          <button onClick={this.componentDidMount} className='nextButton'> Next</button>
        </div> 

        <div className='winner-container'>
          <div className='winner-movie'>
            <p> {this.state.winner}</p>
          </div>
          <div className='resuts'> Results: <span className='outcome'></span>{this.state.outcome}</div>
        </div>


      </div>
    </main>
      
  )
}
}


export default FilmChoice