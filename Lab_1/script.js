let numOfFilms = prompt("Сколько фильмов вы посмотрели?")

let personalMovieDB = {}
personalMovieDB.quantity = numOfFilms
personalMovieDB.movies = {}

const getName = () => {
  let nameOfFilm = prompt("Введите название одного из фильмов, что вы посмотрели:")

  if(nameOfFilm === null || nameOfFilm === "" || nameOfFilm.length > 50){
      getName()
  } else {
      return nameOfFilm
  }
}

const getReview = () => {
  let review = prompt("Оцените этот фильм:")

  if(review === null || review === "" || review.length > 50){
      getName()
  } else {
      return review
  }
}

for (let index = 0; index < numOfFilms; index++) {
    personalMovieDB.movies[getName()] = getReview()
}

console.log(personalMovieDB);