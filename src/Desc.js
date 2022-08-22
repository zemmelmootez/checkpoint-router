import React from 'react'
import {useParams} from 'react-router-dom'

function Desc({movies}) {

    const {id} = useParams()
    const movie = movies.find((mv,idx)=>idx === +id)
  return (
    <div>
       <img src={movie.image}></img>
       <p>{movie.name}</p>
       <span>{movie.rate}</span>
       <p>{movie.desc}</p>
    </div>
  )
}

export default Desc
