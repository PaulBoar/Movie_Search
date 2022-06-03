import React, { useState } from 'react';
import classes from './Main.module.css';
import Movies from './Movies';
import Search from './Search';

function Main() {
 const [movies, setMovies] = useState([])

  const handleGetMovies = (searchedMovies) => {
   setMovies(searchedMovies)
  };

  return (
    <div className={classes.main}>
      <Search onGetMovies={handleGetMovies} />
      <Movies movies={movies}/>
    </div>
  );
}

export default Main;
