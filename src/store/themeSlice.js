// store/themeSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as SecureStore from "expo-secure-store";
import { LightTheme, DarkTheme } from "../constants/theme";
import { THEME_KEY } from "../constants/constants";

export const loadTheme = createAsyncThunk(
  "theme/loadTheme",
  async (systemScheme, { rejectWithValue }) => {
    try {
      const storedTheme = await SecureStore.getItemAsync(THEME_KEY);
      if (storedTheme) {
        return storedTheme === "dark" ? DarkTheme : LightTheme;
      }
      return systemScheme === "dark" ? DarkTheme : LightTheme;
    } catch (error) {
      return rejectWithValue(systemScheme === "dark" ? DarkTheme : LightTheme);
    }
  }
);

// Theme slice
const themeSlice = createSlice({
  name: "theme",
  initialState: {
    theme: LightTheme,
  },
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme.dark ? LightTheme : DarkTheme;
      SecureStore.setItemAsync(THEME_KEY, state.theme.dark ? "dark" : "light");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadTheme.fulfilled, (state, action) => {
      state.theme = action.payload;
    });
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
