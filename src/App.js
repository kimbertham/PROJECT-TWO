import React from 'react'
import axios from 'axios'
 
class App extends React.Component {
state= {
  stations: []
}

async componentDidMount() {
  const res = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=a6f34e87c9902a29316fd7cff8f50328&language=en-US&page=15')
  
  console.log(res)
}






render(){

  return (
    <h1> idk whats happening</h1>
  )
}
}


export default App
