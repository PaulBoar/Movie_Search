import React, { useEffect, useState } from 'react';

import classes from './Search.module.css';

const APIKEY = 'k_y2intaaw';

function Search({onGetMovies}) {
  const [title, setTitle] = useState('');
  const [movies, setMovies] = useState([]);
  let URL = `https://imdb-api.com/en/API/Search/${APIKEY}/${title}`;

  const handleSearch = () => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
     
  };
  useEffect(() => {
    onGetMovies(movies)
  }, [movies])

  return (
    <div className={classes.search}>
      <h2>Search Movie or Series</h2>

      <div>
        <input
          type='text'
          placeholder='Type'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch}
        />
        <button type='submit' onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
}

export default Search;
