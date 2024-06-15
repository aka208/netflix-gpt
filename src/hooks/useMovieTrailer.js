import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addMovieTrailer } from "../utils/moviesSlice";

const useMovieTrailer = async (movieId) => {
  const dispatch = useDispatch((store) => store.movies);
  const movieTrailer = useSelector((store) => store.movies.movieTrailer);
  const getMovieDetails = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    console.log("Now playing ", json.results);
    dispatch(addMovieTrailer(json.results));
  };
  useEffect(() => {
    !movieTrailer && getMovieDetails();
  }, []);
};

export default useMovieTrailer;
