import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const movieSuggestionResult = useSelector((store) => store.gptSearch);
  const { suggestedMovies, searchResults } = movieSuggestionResult;
  if (!searchResults) return null;
  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-80">
      <div>
        {searchResults.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={suggestedMovies[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestion;
