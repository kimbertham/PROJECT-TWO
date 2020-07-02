import React from 'react'
import image from '../../styles/imgs/drink.jpg'

class DrinkMode extends React.Component {
  state={
    show: false
  }

  handleDrink = () => {
    this.setState({ show: !this.state.show })
  }
  

  render(){
    const { show } = this.state
    return (
      <>
        <div className='switch-position drink-toggle'>
          <p className='toggle-text'> Drink Mode </p>
          <label className="switch">
            <input 
              onClick={this.handleDrink}
              type="checkbox"/>
            <span className="slider round"></span>
          </label>
        </div> 
        
              
        <div className={show ? 'score-board drink-container' : 'no-show'}> 
          <img src={image} className='drink-img' alt='score'/>
          <div className='score-num center'>
            {this.props.playerScore}
          </div>
        </div>


      </>
    )
  }
}
export default DrinkMode