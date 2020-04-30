import React from 'react'
import axios from 'axios'
import FilmCard from '../components/FilmCard'
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

async componentDidMount() {
  const numPage = Math.floor(Math.random() * 6)
  try {
    const filmPage = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=9d98d11acbe50d0fea04f4ec6a695022&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${numPage}1&with_original_language=en`)
    this.setState({ filmPage: filmPage.data.results })
    this.getNumbers()
  } catch (err) {
    console.log(err)
  }
}

getNumbers = () => {
  const firstNumber = Math.floor(Math.random() * 20)
  let secondNumber 
  do {
    secondNumber = Math.floor(Math.random() * 20)
  }
  while (secondNumber === firstNumber )
  const movieOne = this.state.filmPage[firstNumber]
  const movieTwo = this.state.filmPage[secondNumber]
  this.setState({ movieOne , movieTwo })
  this.comparePop()
}

comparePop = () => {
  if (  this.state.movieOne.popularity > this.state.movieTwo.popularity) {
    const winner = this.state.movieOne.title
    this.setState(  { winner }  ) 
  } else {
    const winner = this.state.movieTwo.title
    this.setState(  { winner }  ) 
  }
}

  functionTest = (event) => {
    const userChoice = event.target.value
    if (userChoice === this.state.winner){
      this.setState({ outcome: `Right!!   ${this.state.winner}` })
      this.setState({ showScore: true })
    } else {
      this.setState({ outcome: `Wrong!! ${this.state.winner}` })
      this.setState({ showScore: true })
    }
  }
  

  render() {
    console.log(this.state.filmPage)
    return (
      <>
        <main> 
          <div className='main-container'>
            {/* <h1>Movie Rater or st</h1>
        <h2> info about game how to play blah blah alla dat</h2> */}
          
            <div className='game-container'>

              <div className='films-container'>
                <div className='left-movie' value='movieOne'>
                  <FilmCard  {...this.state.movieOne} />
                  <button onClick={this.functionTest} value={this.state.movieOne.title} className="chooseButton">{this.state.movieOne.title}</button>
                  <p className={this.state.showScore ? 'add-on-click' : 'no-show'} >     
                    {this.state.movieOne.popularity}</p>
                </div>

                <div className='versus'></div>

                <div onClick={this.functionTest}  className='right-movie'>
                  <FilmCard {...this.state.movieTwo} />
                  <button onClick={this.functionTest} value={this.state.movieTwo.title} className="chooseButton">{this.state.movieTwo.title}</button>
                  <p className={this.state.showScore ? 'add-on-click' : 'no-show'} >     
                    {this.state.movieTwo.popularity}</p>
                </div>
              </div>
            </div>



            <div className='winner-container'>
              <div className='winner-movie'>
                <div className={`results ${this.state.showScore ? 'add-on-click' : 'no-show'}`}> 
                  <span className='outcome'> {this.state.outcome} </span>
                  <button onClick={this.getNumbers} className='nextButton'> Next</button>
                </div>
              </div>
            </div>
          </div>
        </main>
        

      </>
      
    )
  }

}

export default FilmChoice