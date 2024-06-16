import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  const preferedLanguage = useSelector(
    (store) => store.config.preferedLanguage
  );
  console.log(preferedLanguage);
  const { nowPlayingMovies, popularMovies, trendingMovies, upcomingMovies } =
    movies;
  return (
    <div className="bg-slate-950">
      <div className="mt-0 md:-mt-52 relative z-20">
        <MovieList
          title={lang[preferedLanguage].nowPlaying}
          movies={nowPlayingMovies}
        />
        <MovieList
          title={lang[preferedLanguage].trending}
          movies={trendingMovies}
        />
        <MovieList
          title={lang[preferedLanguage].popular}
          movies={popularMovies}
        />
        <MovieList
          title={lang[preferedLanguage].upComing}
          movies={upcomingMovies}
        />
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
