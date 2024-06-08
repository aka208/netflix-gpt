import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideBackground from "./VideBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return;
  const mainMovie = movies[0];
  console.log("MAIN MOVIE ", mainMovie);
  const { id, original_title, overview } = mainMovie;

  return (
    <div>
      <VideoTitle title={original_title} description={overview} />
      <VideBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
