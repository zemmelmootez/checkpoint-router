
import React from 'react'
import MovieList from './MovieList'
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Add from './Add';

export default function App() {

  fetch("https://api.openweathermap.org/data/2.5/weather?q=Gabes&appid=6ee2bb41edfb55a09647f0fee912f300").then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
  return (
    <div>
      <MovieList></MovieList>
    
    </div>
  )
}
