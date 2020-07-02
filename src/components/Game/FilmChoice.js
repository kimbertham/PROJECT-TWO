import React from 'react'
import axios from 'axios'
import FilmCard from './FilmCard'
import FilmWinner from './FilmWinner'
import { baseURL } from '../common'
import Score from './Score'
import DrinkMode from './DrinkMode'

class FilmChoice extends React.Component{
state = {
  movieOne: { },
  movieTwo: { }, 
  winner: '',
  outcome: '',
  score: 0,
  showScore: false,
  flash: false
}

async componentDidMount() {
  this.getData()
}

getData = async () => {
  try {

    this.setState({ showScore: false, flash: false })

    const firstNumber = Math.floor(Math.random() * 20)
    let secondNumber 
    do {
      secondNumber = Math.floor(Math.random() * 20)
    }
    while (secondNumber === firstNumber )
  
    const res = await axios.get(`${baseURL}${Math.floor(Math.random() * 10)}1&with_original_language=en`)
    const movieOne = res.data.results[firstNumber]
    const movieTwo = res.data.results[secondNumber]

    const winner = movieOne.popularity > 
    movieTwo.popularity ? movieOne.title  : movieTwo.title 

    this.setState({ winner, movieOne, movieTwo }) 

  } catch (err) {
    console.log(err)
  }
}

outcome = (title) => {
  if (this.state.showScore === true) return
  const outcome = title === this.state.winner ? 
    'You were right!!' : 'Unlucky!'
  const score = title === this.state.winner ? 
    this.state.score + 1 : 0
  this.setState({ outcome, showScore: true, flash: true, score  })
}
  

render() {
  const { showScore,winner, outcome, flash, score } = this.state
  return (
    <>

  
      <Score
        playerScore={score}/>

      <DrinkMode/>

      <main> 
        <div className='game-container'>
          <div className='films-container center'>
          
          
            <div className='movie'>
              <FilmCard 
                {...this.state.movieOne} 
                outcome={this.outcome}
                winner={winner}
                flash={flash}
                showScore={showScore}/>
            </div>
  
            <div className='versus'/>

            <div className='movie'>
              <FilmCard 
                {...this.state.movieTwo} 
                outcome={this.outcome}
                winner={winner}
                flash={flash}
                showScore={showScore}/>
            </div>
          </div>

          <FilmWinner
            showScore={showScore}
            winner={winner}
            outcome={outcome}
            getData={this.getData}/>

        </div>
      </main>
    </>
  )
}
}

export default FilmChoice