import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  const { nowPlayingMovies, popularMovies } = movies;
  return (
    <div className="bg-slate-950">
      <div className="-mt-52 relative z-20">
        <MovieList title="Now Playing" movies={nowPlayingMovies} />
        <MovieList title="Trending" movies={nowPlayingMovies} />
        <MovieList title="Popular" movies={popularMovies} />
        <MovieList title="Up Coming" movies={nowPlayingMovies} />
      </div>
      {/* <MovieList title="Now Playing" movies={nowPlayingMovies} />
      <MovieList title="Now Playing" movies={nowPlayingMovies} /> */}
      {/* 
      Movie List - Popular
      Movie List - Now Playing
      Movie List - Trending
      Movie List - Horror
       */}
    </div>
  );
};

export default SecondaryContainer;
