import { createSlice } from "@reduxjs/toolkit";

export interface ThemeState {
  value: string;
}

const initialState: ThemeState = {
  value: "light",
};

export const counterSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    light: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = "light";
    },
    dark: (state) => {
      state.value = "dark";
    },
  },
});

// Action creators are generated for each case reducer function
export const { light, dark } = counterSlice.actions;

export default counterSlice.reducer;
