import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideBackground = ({ movieId }) => {
  useMovieTrailer(movieId);
  const movieDetails = useSelector((store) => store.movies?.movieTrailer);
  if (!movieDetails) return;
  //   console.log(movieDetails);
  const movieTrailers = movieDetails.filter(
    (movieDetail) => movieDetail.type.toLowerCase() === "trailer"
  );
  console.log(movieTrailers[0]);
  const trailer = movieTrailers.length ? movieTrailers[0] : movieDetails[0];
  const { key } = trailer;
  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          key +
          "?playlist=" +
          key +
          "&loop=1&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="autoplay"
      ></iframe>
    </div>
  );
};

export default VideBackground;
