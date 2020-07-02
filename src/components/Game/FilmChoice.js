import React from 'react'
import axios from 'axios'
import FilmCard from './FilmCard'
import FilmWinner from './FilmWinner'
import { baseURL, loseOptions, winnerOptions } from '../common'
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
  flash: false,
  rule: ''
}

async componentDidMount() {
  this.getData()
}

getData = async () => {
  try {

    this.setState({ showScore: false, flash: false,  rule: '' })

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

  const num = Math.floor(Math.random() * 8)
  let score
  let outcome
  let rule 


  if (title === this.state.winner) {
    outcome = 'You were right!!' 
    score = this.state.score + 1
    rule = winnerOptions[num]
  } else {
    outcome = 'Unlucky!'
    score = 0
    rule = loseOptions[num]
  }

  this.setState({ 
    outcome,
    rule,
    showScore: true,
    flash: true, score
  })
}
  

render() {
  const { showScore,winner, outcome, flash, score, rule } = this.state
  console.log(this.state.rule)
  return (
    <>

      <div className='film-settings'>
        <Score
          playerScore={score}/>
        <DrinkMode
          rule={rule}/>
      </div>

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