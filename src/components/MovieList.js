import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  return (
    <div className="px-24">
      <h1 className="text-3xl font-bold text-slate-50 pb-5 pt-14">{title}</h1>
      <div className="flex overflow-x-scroll snap-x">
        <div className="flex gap-2">
          {movies &&
            movies.map((movie) => {
              return <MovieCard key={movie.id} movie={movie} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
