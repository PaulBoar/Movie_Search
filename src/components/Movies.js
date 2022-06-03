import React, { useState, useEffect } from 'react';

import classes from './Movies.module.css';

const APIKEY = 'k_y2intaaw';

function Movies({ movies }) {
  const [moviesList, setMoviesList] = useState([]);

  console.log(movies);
  useEffect(() => {
    setMoviesList(movies);
  }, [movies]);

  return <div>
   <ul>
    {moviesList.map(movie => {console.log(movie.title)})}
   </ul>
  </div>;
}

export default Movies;
