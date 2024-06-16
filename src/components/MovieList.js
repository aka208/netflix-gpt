import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  return (
    <div className="px-5 md:px-24">
      <h1 className="text-lg md:text-3xl font-bold text-slate-50 pb-5 pt-14">
        {title}
      </h1>
      <div className="flex overflow-x-auto snap-x">
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
