import axios from 'axios' 

const imgURL = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/'
const baseURL = 'https://api.themoviedb.org/3/discover/movie?api_key=9d98d11acbe50d0fea04f4ec6a695022&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_original_language=en'

export function randomNum(firstNumber, secondNumber ) {
  do {
    secondNumber = Math.floor(Math.random() * 20)
    console.log(secondNumber)
    console.log(firstNumber)
  }
  while (secondNumber === firstNumber )
}