import { configureStore } from "@reduxjs/toolkit";
import { tasksListSlice } from "./slices/tasksListSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas.js";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    tasksList: tasksListSlice.reducer,
  },
  middleware: () => [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
