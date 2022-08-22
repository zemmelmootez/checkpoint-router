import React from 'react'

function MovieItem(props) {
  return (
    <div>
       <img src={props.image}></img>
       <p>{props.name}</p>
       <span>{props.rate}</span>
    </div>
  )
}

export default MovieItem
