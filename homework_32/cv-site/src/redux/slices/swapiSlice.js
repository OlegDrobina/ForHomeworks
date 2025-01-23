import { createSlice } from "@reduxjs/toolkit";

const initialState = { swapiResponse: "", isClearButtonVisible: false };

export const swapiSlice = createSlice({
  name: "swapi",
  initialState,
  reducers: {
    startProcessFetchResponse: (state, action) => {},
    processFetchResponse: (state, action) => {
      state.swapiResponse = action.payload;
      state.isClearButtonVisible = true;
    },
    startProcessClearResponse: (state, action) => {},
    clearResponse: (state) => {
      state.swapiResponse = "";
      state.isClearButtonVisible = false;
    },
  },
});

export const {
  startProcessFetchResponse,
  processFetchResponse,
  startProcessClearResponse,
  clearResponse,
} = swapiSlice.actions;

export const getData = (payload) => async (dispatch) => {
  const reqUrl = API.URL_SWAPI;
  const completeUrl = `${reqUrl}${payload}`;
  try {
    const response = await fetch(completeUrl);
    const data = await response.json();
    dispatch(processFetchResponse(JSON.stringify(data.result, false, 4)));
  } catch (e) {
    console.log(e);
  }
};
