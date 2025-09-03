import React from 'react';
import Navbar from './componets/Navbar/Navbar';
import MovieList from './componets/MovieList/MovieList';
import "./App.css";
import MovieCard from './componets/MovieList/MovieCard';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <MovieList />
      <main>Main Content</main>
    </div>
  )
}

export default App