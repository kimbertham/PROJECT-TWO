import React from 'react'
import axios from 'axios'
import FilmCard from '../components/FilmCard'
// import GameLogic from './GameLogic'

class FilmChoice extends React.Component{
state = {
  movieOne: { },
  movieTwo: { }, 
  winner: '',
  outcome: '',
  showScore: false,
  side: ''
}

resetFunction = () => {
  this.setState({
    movieOne: { },
    movieTwo: { }, 
    winner: '',
    outcome: '',
    showScore: false,
    side: ''
  }
  )
  this.componentDidMount()
}

async componentDidMount() {
  const numPage = Math.floor(Math.random() * 10)
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
    let side 
    if (this.state.movieOne.popularity > this.state.movieTwo.popularity) {
      side = 'left'
    } else {
      side = 'right'
    }
    this.setState({ side })

    if (userChoice === this.state.winner){
      this.setState({ outcome: ' You were right!!' })
      this.setState({ showScore: true })
    } else {
      this.setState({ outcome: ' Unlucky! Maybe try again dum dum... ' })
      this.setState({ showScore: true })
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
 
// leftHide = () => setInterval(this.hideBox, 3000)

  
hideBox = (event)  => {
  
  console.log('clicked')
  return this.state.side === event ? 'loser' : ''
// right==== this.state.side === 'right' ? 'loser' : ''
// left ===== this.state.side === 'right' ? 'loser' : ''
}





render() {
  return (
    <>
      <main> 
        <div className='main-container'>
          <div className='game-container'>
            <div className='films-container'>

              <div className={this.state.side === 'left' ? 'winner' : ''}>
                <div className='movie' value='movieOne'>
                  <FilmCard {...this.state.movieOne} />
                  <button
                    onClick={this.functionTest}
                    value={this.state.movieOne.title}
                    className={this.state.showScore ? 'no-show' : 'chooseButton'}
                  >{this.state.movieOne.title}</button>

                  <p className={`'score' ${this.state.showScore ? 'add-on-click' : 'no-show'}`}>{this.state.movieOne.popularity}</p>
                </div>
              </div>

              <div className='versus'></div>


              <div className={this.state.side === 'right' ? 'winner' : ''} value='movieTwo'>
                <div className='movie' value='movieTwo'>
                  <FilmCard {...this.state.movieTwo} />
                  <button 
                    onClick={this.functionTest} 
                    value={this.state.movieTwo.title} 
                    className={this.state.showScore ? 'no-show' : 'chooseButton'}
                  >{this.state.movieTwo.title}</button>

                  <p className={this.state.showScore ? 'add-on-click' : 'no-show'}>{this.state.movieTwo.popularity}</p>
                </div>
              </div>
            </div>
          </div>

          <div className='winner-container'>
            <div className='winner-movie'>
              <div className={`results ${this.state.showScore ? 'add-on-click-two' : 'no-show'}`}> 
                <span className='outcome'> <p>{this.state.outcome}  </p> IMDb reckons {this.state.winner} is the better film</span>
                <button onClick={this.resetFunction} className='nextButton'><p><b>> > ></b></p></button>
              </div>
              <div className='next-button-div'></div>
            </div>
          </div>
        </div>
      </main>
        

    </>
      
  )
}

}

export default FilmChoice