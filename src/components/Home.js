import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <h1> WELCOME TO MOVIE RATER </h1>
      <Link to='/game' className='home-button'> Start Rating</Link>
    </>
  )
}




export default Home