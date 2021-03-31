<h1> MoviRatr </h1>

<h2> Brief </h3>
<p> General Assembly Hackathon: Create a frontend web app using an API of your choosing in 48 hours.</p>
<p>Team mate: https://github.com/brobo01/ </p>

<h2> Technologies </h2>
<ul>
  <li><p>- JavaScript</p></li>
  <li><p>- ReactJs</p></li>
  <li><p>- Insomnia</p></li>
  <li><p>Babel</p></li>
  <li><p>Axios</p></li>
  <li></p>react-router-dom</p></li>
</ul>

<h2> Process </h2>
<h4> Overview </h4>
<p> After searching through a range of APIs, Ben and I decided we would use the TMDB API which provides users with a data on a large number of movies in a variety of different endpoints. We initially considered making a simple webpage that provided users with details on selected movies but thought it could be more challenging to create a game type app that allows users to guess the ratings between two movies. 
  
<h2> TMdb API </h2> 
<p> We first had a had a look at the documeentation for different options we could use and plugged a few of the URLs into insomnia to have a better idea of the data we would recieve. At this point we noted down the possible parameters we'd need to use. Once we began writing the function to store the winner and loser movie in state, we realised we would need to ensure the two chosen movies would not be the same. We generated two random numbers, one for each movie and also one random movie for the results page number on the axios request. </p>

<h2> Displaying result </h2>
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
 <p> With more time to spare we decided to quickly pull together our intial idea and create a new movies page that provided the user with details on a selected movie </p> 
 
 <h4> AFTER PROJECT: drink mode and score </h4>
 <p> After completing the project I decided to take a day to add a drink mode and score board to the game. The drink mode takes an array of prewritten drink rules separated as win or lose options. I added these conditions to the if else statement in the game to be set depending on the users choice. 
  
  
