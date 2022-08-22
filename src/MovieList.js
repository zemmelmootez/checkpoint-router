import React, { useRef, useState } from 'react'
import MovieItem from './Movie-item'
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import Add from './Add'
import Desc from './Desc';
function MovieList() {
    const [movies,setMovie]=useState(
        [
          {name:"John Wick 1",image:"https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg",rate:"3" , desc:"ebrehbrebrjebrjerbjebr"},
          {name:"Creed",image:"https://upload.wikimedia.org/wikipedia/en/2/24/Creed_poster.jpg",rate:"4"}, 
          {name:"Avengers Endgame",image:"https://images-na.ssl-images-amazon.com/images/I/81ExhpBEbHL._SY445_.jpg",rate:"3"},
          {name:"Spiderman Homecoming",image:"https://upload.wikimedia.org/wikipedia/en/f/f9/Spider-Man_Homecoming_poster.jpg",rate:"3"},
        ])

  return (
    <div>
            <>
              <BrowserRouter>
              <Routes>
                <Route path='/' element={
                  <>
        <Add movies={movies} setMovie={setMovie}></Add>
        {movies.map((e,index)=>(
              <NavLink to={"/"+index}> 
                <MovieItem  movies={movies} setMovie={setMovie} key={index} name={e.name} image={e.image} rate={e.rate} ></MovieItem>
              </NavLink>
              ))}
                  </>
                }>
                </Route>
                
     <Route path='/:id' element={ <Desc  movies={movies} ></Desc>  }></Route>
            </Routes>
          </BrowserRouter>
          </>

   
    </div>
  )
}

export default MovieList
