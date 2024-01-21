const findTheMovie = (movieTitle, movieYear, arrOfMovies) => {
    for (let i = 0; i < arrOfMovies.length; i++) {
        const movie = arrOfMovies[i];
        if (movie.title === movieTitle && movie.year === movieYear) {
            return movie;
        }
    }
    return null;
};

const userMovieTitle = 'Star Wars';
const userMovieYear = 1977;

const moviesArray = [
    {
        title: 'Star Wars',
        director: 'George Lucas',
        year: 1977
    },
    {
        title: 'The Dark Knight',
        director: 'Christopher Nolan',
        year: 2008
    }
];
const favoriteMovie = findTheMovie(userMovieTitle, userMovieYear, moviesArray);

console.log(favoriteMovie);