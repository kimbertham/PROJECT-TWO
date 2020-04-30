import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import FilmChoice from './components/FilmChoice'
 
const App = () => {

  return (
    <div className='container'>
      <Header />
      {/* <Main /> */}
      <FilmChoice />
    </div>
  )
}


export default App
