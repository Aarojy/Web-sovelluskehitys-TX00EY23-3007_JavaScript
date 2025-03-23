const movieCount = prompt('How many movies do you want to add?');

const movies = [];
for (let i = 0; i < movieCount; i++) {
  const movieName = prompt(
    '(' + (i + 1) + '/' + movieCount + ') Enter the name of the movie:'
  );

  let movieRating;
  do {
    movieRating = Number(prompt('Enter the rating (1-5) of the movie:'));
  } while (movieRating < 1 || movieRating > 5 || isNaN(movieRating));

  const movie = {
    name: movieName,
    rating: movieRating,
  };
  movies.push(movie);
}

movies.sort((a, b) => b.rating - a.rating);
const bestMovies = movies[0];

const table = document.querySelector('table');
for (const movie of movies) {
  let newRow = table.insertRow();
  let newNameCell = newRow.insertCell();
  let newRatingCell = newRow.insertCell();
  newNameCell.innerHTML = movie.name;
  newRatingCell.innerHTML = movie.rating + '/5';
  newNameCell.style.border = '1px solid black';
  newRatingCell.style.border = '1px solid black';
  newNameCell.style.padding = '2px';
  newRatingCell.style.padding = '2px';
}

document.querySelector(
  'body'
).innerHTML += `<p>The best movie is ${bestMovies.name} with a rating of ${bestMovies.rating}/5</p>`;
