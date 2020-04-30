import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Header from './components/Header'
import Home from './components/Home'
import FilmChoice from './components/FilmChoice'

const App = () => {
  return (
    <div className='container'>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/game' component={FilmChoice} />
        </Switch>
      </BrowserRouter>
    </div>
 
  )
}


export default App
