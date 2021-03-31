<h1> MoviRatr </h1>
<p> Link:  https://movi-rate.netlify.app/
<h2> Brief </h3>
<p> General Assembly Hackathon: Create a frontend web app using an API of your choosing in 48 hours.</p>
<p>Team mate: https://github.com/brobo01/ </p>

<h2> Demo </h2>
<img src='https://i.imgur.com/RSyriaI.jpg' alt='demo'/>

<h2> Technologies </h2>
<ul>
  <li><p>JavaScript</p></li>
  <li><p>ReactJs</p></li>
  <li><p>Insomnia</p></li>
  <li><p>Babel</p></li>
  <li><p>Axios</p></li>
  <li></p>react-router-dom</p></li>
</ul>

<h2> Process </h2>
<h4> Overview </h4>
<p> After searching through a range of APIs, Ben and I decided we would use the TMDB API which provides users with a data on a large number of movies in a variety of different endpoints. We initially considered making a simple webpage that provided users with details on selected movies but thought it could be more challenging to create a game type app that allows users to guess the ratings between two movies. 
  
<h4> TMdb API </h4> 
<p> We first had a had a look at the documeentation for different options we could use and plugged a few of the URLs into insomnia to have a better idea of the data we would recieve. At this point we noted down the possible parameters we'd need to use.</p>

<h4> Displaying result </h4>
<p> Once the movies were stored in state we created two buttons that triggered the same function, the function took in the title of the movie as a parameter. The function contatined a if else statement that would compare the title parameter with the winner and loser state variables and would set the outcome as either right or wrong depending on if the user chose the right option. </p>

```
  if (title === this.state.winner) {
    outcome = 'You were right!!' 
    score = this.state.score + 1
  } else {
    outcome = 'Unlucky!'
    score = 0
  }
  ```
<p> we used ternary classsNames within the jfx and different state results to display the results. </p>

```
   <span className='outcome-span'>{outcome}</span>

```
```
 className={ 
          `movie-poster 
          ${winner === title && flash === true ? 'movie-flash' : ''}
          ${winner !== title && flash === true ? 'movie-dim' : '' }` 
        }
 ```
 <h4> Movie information </h4> 
 <p> With more time to spare we decided to quickly pull together our intial idea and create a new movies page that provided the user with details on a selected movie. We created a reusable MovieCard component and fed in the data through props. </p> 
 <img src='https://i.imgur.com/2LlFlRZ.jpg' alt='info' width='200'/>
 
 <img src='https://i.imgur.com/rWYIOl5.png' alt='info' widnth='200'/>
 <h4> AFTER PROJECT: drink mode and score </h4>
 <p> 
  After completing the project I decided to take a day to add a drink mode and score board to the game. The drink mode takes an array of prewritten drink rules separated as win or lose options. I added these conditions to the if else statement in the game to be set depending on the users choice. 
<p float='left'>
<img src='https://i.imgur.com/pPBK725.png' alt='drink' width='200'/>
  <img src='https://i.imgur.com/EzAKhth.png' alt='drink' width='200'/>
  </p>
</p>
  
  
<h2> Difficulties </h2> 
<ul>
<p><li>Once we began writing the function to store the winner and loser movie in state, we realised we would occasionally get the same movie twice and had to ensure the two chosen movies would not be the same. We generated two random numbers, one for each movie and also one random movie for the results page number on the axios request. </li></p>
  
```
  
getData = async () => {
  try {

    this.setState({ showScore: false, flash: false,  rule: '' })

    const firstNumber = Math.floor(Math.random() * 20)
    let secondNumber 
    do {
      secondNumber = Math.floor(Math.random() * 20)
    }
    while (secondNumber === firstNumber )
  
    const res = await axios.get(`${baseURL}${Math.floor(Math.random() * 10)}1&with_original_language=en`)
    const movieOne = res.data.results[firstNumber]
    const movieTwo = res.data.results[secondNumber]

    const winner = movieOne.popularity > 
    movieTwo.popularity ? movieOne.title  : movieTwo.title 

    this.setState({ winner, movieOne, movieTwo }) 

  } catch (err) {
    console.log(err)
  }
}

```
<p></li> As we didnt have very much time to work through the project, we initially were worried about planning and timing constraints as we also wanted to have enough time to finish styling for presenation. Later on in the project we felt a lot better once we had completed the basis of the app and gained a more realistic idea of how much time would be necessary for each task.</li></p>
</ul>

<h2> Wins </h2>
<ul>
  <li><p>Creating out states to fit with the jsx really cut down on our code so we were able utilise the altering stages to work well with the stlying </p> </li>
  <li><p> Communicating with each other was very easy and made the decisions process fast as we always took each others notes into consideration.
  </ul>
  
<h2> Bugs and future work </h2>
<p> One of the small issues we have is empty divs when the API does not provide and image. This could quickly be solved with default image put into place. </p>

<h2> Experience and takeaways </h2>
<p> Working with a new framework has proven to me an invaluable experience and has shown me a lot about reusable code. This project also taugh me a lot about working with others remotely under a time limit, I am better able to articulate myself coherently in terms of code to others. I found working with Ben enjoyable and it taught me a lot. 
