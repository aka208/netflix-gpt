import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMovieTrailer } from "../utils/moviesSlice";

const useMovieTrailer = async (movieId) => {
  const dispatch = useDispatch((store) => store.movies);
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
    getMovieDetails();
  }, []);
};

export default useMovieTrailer;
