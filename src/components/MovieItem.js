import React from 'react'
import classes from './MovieItem.module.css'

function MovieItem({title, img, description}) {
  return (
    <div className={classes['movie_item']}>
     <img src={img} />
     <h3>{title}</h3>
     <p>{description}</p>
    </div>
  )
}

export default MovieItem