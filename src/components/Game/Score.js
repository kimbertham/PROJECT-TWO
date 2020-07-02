import React from 'react'
import image from '../../styles/imgs/score.jpg'

class Score extends React.Component {
  state={
    show: false
  }

  handleScore = () => {
    this.setState({ show: !this.state.show })
  }
  

  render(){
    const { show } = this.state
    return (
      <>
        <div className='switch-position center'>
          <p className='toggle-text'> Score </p>
          <label className="switch">
            <input 
              type="checkbox"
              onClick={this.handleScore}/>
            <span className="slider round"></span>
          </label>
        </div> 
      
        <div className={show ? 'board' : 'no-show'}>
          <img src={image} className='score-img' alt='score'/>
          <div className='board-fill center'>
            {this.props.playerScore}
          </div>
        </div>
      </>
    )
  }
}
export default Score