import React, { useState, useEffect } from 'react';
import MovieItem from './MovieItem';

import classes from './Movies.module.css';

const APIKEY = 'k_y2intaaw';

function Movies({ movies }) {
  const [moviesList, setMoviesList] = useState([]);

  console.log(movies);
  useEffect(() => {
    setMoviesList(movies);
  }, [movies]);

  return <div className={classes.container}>
   <ul>
    {moviesList.map(movie => {
     {console.log(movie)}
     return <MovieItem title={movie.title} img={movie.image} description={movie.description} />
    })}
   </ul>
  </div>;
}

export default Movies;
