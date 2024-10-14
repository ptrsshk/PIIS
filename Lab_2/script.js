const personalMovieDB = {
  privat: false,
  movies: {
      "John Wick": 8.5,
      "Konstantin": 7.0,
      "Alyosha Popovich": 9.0
  }
};

function displayMovies() {
  if (!personalMovieDB.privat) {
    const movieTableContainer = document.getElementById('movieTableContainer')
    const movieTable = document.createElement('table');
    movieTable.innerHTML += '<caption>Ваша фильмотека</caption>';
    movieTable.classList.add('movieTable')
    movieTable.innerHTML += `<tr><th>Название фильма</th><th>Оценка</th></tr>`;  
    for (const [title, rating] of Object.entries(personalMovieDB.movies)) {
        const row = `<tr><td>${title}</td><td>${rating}</td></tr>`;
        movieTable.innerHTML += row;
    }
    movieTableContainer.appendChild(movieTable)
  }

  
}

displayMovies(); // Вызов функции для отображения фильмов