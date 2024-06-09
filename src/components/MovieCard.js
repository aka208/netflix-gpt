import React from "react";
import { MOVIE_POSTER_URL } from "../utils/constants";

const MovieCard = ({ movie }) => {
  const { original_title, backdrop_path, poster_path } = movie;
  return (
    // <div className="w-64">
    <div className="w-48 snap-center">
      <img
        className="rounded-md"
        src={MOVIE_POSTER_URL + poster_path}
        alt={original_title}
      />
    </div>
    // </div>
  );
};

export default MovieCard;
