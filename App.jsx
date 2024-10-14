import { useEffect, useState } from 'react'
import './App.css'
import searchIcon from './search.svg'
const API_URL = ' http://www.omdbapi.com/?i=tt3896198&apikey=64d383d2'

import Moviecard from './card';

const movie1 = {
  "Title": "Breaking Bad",
  "Year": "2008–2013",
  "imdbID": "tt0903747",
  "Type": "series",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMzU5ZGYzNmQtMTdhYy00OGRiLTg0NmQtYjVjNzliZTg1ZGE4XkEyXkFqcGc@._V1_SX300.jpg"
}
const App = () => {

  const [movies,setMovies] = useState([]);
  const [serchTerm,setSearch] = useState('');
 
  const serchMovies = async(title) => {
 const response = await fetch(`${API_URL}&s=${title}`);
const data = await response.json();

setMovies(data.Search);
}  
useEffect(() => {

  serchMovies('breaking bad')
  },[]);
  return (
  <div className='app'>
<h1>LOVEMOVIES</h1>
<div className='search'>
<input type="text"
placeholder='Look For Movies' 
value={serchTerm}
onChange={(e) =>{setSearch(e.target.value)}}
/>
<img src={searchIcon} alt="search"
onClick={() =>serchMovies(serchTerm)}
 />
</div>

{
  movies?.length > 0
   ? (
    <div className='container'>
{movies.map((movie) => (
  < Moviecard movie={movie}/>
))

}
</div>
  ): (
    <div className='empty'>
        <h2>No movies found</h2>
    </div>
  )
}

  </div>
  );
}

export default App
