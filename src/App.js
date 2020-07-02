import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Header from './components/common/Header'
import Home from './components/Home'
import FilmChoice from './components/Game/FilmChoice'
import Movies from './components/Movies/Movies'
import Footer from './components/common/Footer'
import MovieShow from './components/Movies/MovieShow'


const App = () => {
  return (
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
 
  )
}


export default App
