import { configureStore } from "@reduxjs/toolkit";
import tasksListSlice from "./slices/tasksListSlice";

export const store = configureStore({
  reducer: {
    tasksList: tasksListSlice.reducer,
  },
});
