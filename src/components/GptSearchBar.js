import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { setSuggestedMovies } from "../utils/gptSearchSlice";

const GptSearchBar = () => {
  const appConfig = useSelector((store) => store.config);
  const dispatch = useDispatch();
  const gptInputRef = useRef(null);
  const { preferedLanguage } = appConfig;

  const searchMovieTmdb = async (movieName) => {
    const movieNameParam = movieName.split(" ").join("%20");
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movieNameParam}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const getMovieResults = async () => {
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query" +
      gptInputRef.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Narnia, Golmaal, Koi Mil Gaya";
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    // const json = await gptResults.json();
    if (!gptResults.choices) return "GPT API FAILED!!";
    const { content } = gptResults.choices?.[0]?.message;
    const gptMovies = content.split(", ");
    console.log(gptMovies);
    const promiseArray = gptMovies.map((movie) => searchMovieTmdb(movie));
    const tmdbResults = await Promise.all(promiseArray);
    dispatch(
      setSuggestedMovies({ movieNames: gptMovies, movieResults: tmdbResults })
    );
    console.log("Results Data ", tmdbResults);
  };
  const handleGptSearchClick = () => {
    console.log(gptInputRef.current.value);
    getMovieResults();
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={gptInputRef}
          className="p-2 m-4 col-span-9"
          type="text"
          placeholder={lang[preferedLanguage].gptSearchPlaceholder}
        />
        <button
          className="m-4 py-2 px-4 bg-red-600 text-white rounded-md col-span-3"
          onClick={handleGptSearchClick}
        >
          {lang[preferedLanguage].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
