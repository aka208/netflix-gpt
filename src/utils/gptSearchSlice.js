import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
  name: "gptSearch",
  initialState: {
    showGptSearch: false,
    suggestedMovies: null,
    searchResults: null,
  },
  reducers: {
    toggleGptSearchView: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    setSuggestedMovies: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.suggestedMovies = movieResults;
      state.searchResults = movieNames;
    },
  },
});
export const { toggleGptSearchView, setSuggestedMovies } =
  gptSearchSlice.actions;
export default gptSearchSlice.reducer;
