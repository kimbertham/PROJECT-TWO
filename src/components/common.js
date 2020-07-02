
export const baseURL = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIES_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=`
export const poster = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2'
export const oneMovie =  'https://api.themoviedb.org/3/movie/'

export const winnerOptions = [
  'Safe!',
  'Safe!',
  'Safe!',
  'Player opposite must have a drink!',
  'Choose someone to have a drink!',
  'Have a lil sip anyway!',
  'Choose someone to down their drink!',
  'Player to you left has a drink for you!'
]

export const loseOptions = [
  'Down your Drink!',
  'Have a shot!',
  '2 Sips for every word in the losing movie title!',
  'Take a sip!',
  'Add a shot to your drink then have a sip!',
  'Drink!',
  'Drink!',
  'Drink!'
]