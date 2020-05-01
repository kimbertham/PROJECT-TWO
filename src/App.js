import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Header from './components/Header'
import Home from './components/Home'
import FilmChoice from './components/FilmChoice'
import Movies from './components/Movies/Movies'
import Footer from './components/common/Footer'
import MovieShow from './components/Movies/MovieShow'


const App = () => {
  return (
    <div className='container'>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/game' component={FilmChoice} />
          <Route path='/movies' component={Movies}/>
          <Route path='/info/:id' component={MovieShow} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
 
  )
}


export default App
