import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "appConfig",
  initialState: { preferedLanguage: "en" },
  reducers: {
    changeLanguage: (state, action) => {
      state.preferedLanguage = action.payload;
    },
  },
});

export const { changeLanguage } = configSlice.actions;
export default configSlice.reducer;
