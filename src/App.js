//https://www.omdbapi.com/?apikey=e2d4721d&s=
import './App.css'
import { useEffect,useState } from 'react';
import MovieCard from './MovieCard';

function App() {
  const [movies, setMovies] = useState([])
  const [movieName, setMovieName] = useState('')
  const API_URL='https://www.omdbapi.com/?apikey=e2d4721d&s='
  const searchMovies=async(title)=>{
      const response=await fetch(`${API_URL}${title}`)
      const data=await response.json()
      setMovies(data.Search)
  }
useEffect(()=>{
  

},[])
  return (
    <div className="App">
      <div className="header">
        <h1>MovieLand</h1>
        <div className="searchbar">
          <input
          type='text'
           placeholder="Search for movies"
          value={movieName}
          onChange={(e)=>setMovieName (e.target.value)}
          />
          <i className="fa-solid fa-magnifying-glass"
          onClick={()=>searchMovies(movieName)}
          />
        </div>
      </div>

      {
        movies?.length>0
        ?(<div className="container">
        {
          movies.map((movie)=>(
            <MovieCard movie={movie}/>
          ))
        }
       </div>):(
        <div className='empty'>
          <h2>No movie found</h2>
        </div>
       )
      }
      
    </div>
  );
}

export default App;
