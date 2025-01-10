import { configureStore } from "@reduxjs/toolkit";
import { swapiSlice } from "./slices/swapiSlice";

export const store = configureStore({
  reducer: {
    swapi: swapiSlice.reducer,
  },
});
