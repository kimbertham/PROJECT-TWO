import React from 'react'
import axios from 'axios'
import FilmCard from '../components/FilmCard'
import { randomNum } from '../lib/api'
// import GameLogic from './GameLogic'

class FilmChoice extends React.Component{
state = {
  filmPage: '',
  movieOne: { },
  movieTwo: { }, 
  winner: '',
  outcome: '',
  showScore: false
}

resetFunction = () => {
  this.setState({
    filmPage: '',
    movieOne: { },
    movieTwo: { }, 
    winner: '',
    outcome: '',
    showScore: false
  }
  )
  this.componentDidMount()
}

async componentDidMount() {
  const numPage = Math.floor(Math.random() * 6)
  try {
    const res = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=9d98d11acbe50d0fea04f4ec6a695022&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${numPage}1&with_original_language=en`)
    console.log('page number', numPage)



    const firstNumber = Math.floor(Math.random() * 20)
    let secondNumber 
    do {
      secondNumber = Math.floor(Math.random() * 20)
    }
    while (secondNumber === firstNumber )

    console.log(secondNumber)

    const movieOne = res.data.results[firstNumber]
    const movieTwo = res.data.results[secondNumber]


    this.setState({ movieOne , movieTwo })
    this.comparePop()
  } catch (err) {
    console.log(err)
  }
}




  functionTest = (event) => {
    const userChoice = event.target.value
    if (userChoice === this.state.winner){
      console.log('nice job')
      this.setState({ outcome: `Right!!   ${this.state.winner}` })
      this.state.showScore(true)
    } else {
      console.log('dum dum')
      this.setState({ outcome: `Wrong!! ${this.state.winner}` })
      this.state.showScore(true)
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

// function = () => {
//   return this.state.winner
// }


render() {
  return (
    <>
      <main> 
        <div className='main-container'>
          {/* <h1>Movie Rater or st</h1>
        <h2> info about game how to play blah blah alla dat</h2> */}
          
          <div className='game-container'>
        
            <div className='left-container'>
              <div className='left-movie' value='movieOne'>
                <FilmCard  {...this.state.movieOne} />
                <button onClick={this.functionTest} value={this.state.movieOne.title} className="chooseButton">{this.state.movieOne.title}</button>
                <p className={`no-show ${this.state.showScore ? 'add-on-click' : '' }`} >     
                  {this.state.movieOne.popularity}</p>
              </div>
            </div>

            <div className='right-container'>
              <div onClick={this.functionTest}  className='right-movie'>
                <FilmCard {...this.state.movieTwo} />
                <button onClick={this.functionTest} value={this.state.movieTwo.title} className="chooseButton">{this.state.movieTwo.title}</button>
                <p>{this.state.movieOne.popularity}</p>
              </div>
            </div>
            <button onClick={this.resetFunction} className='nextButton'> Next</button>
          </div> 


          <div className='winner-container'>
            <div className='winner-movie'>
              <div className='results'> 
              Results: <br/> <span className='outcome'> {this.state.outcome} </span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer> <p>movie rater 2020 </p></footer>
    </>
      
  )
}

}

export default FilmChoice