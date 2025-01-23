import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  swapiResponse: "",
  isClearButtonVisible: false,
  isGetInfoButtonDisabled: false,
};

export const swapiSlice = createSlice({
  name: "swapi",
  initialState,
  reducers: {
    startProcessFetchResponse: (state) => {
      state.isGetInfoButtonDisabled = true;
    },
    processFetchResponse: (state, action) => {
      state.swapiResponse = action.payload;
      state.isGetInfoButtonDisabled = false;
      state.isClearButtonVisible = true;
    },
    startProcessClearResponse: (state) => {
      state.isGetInfoButtonDisabled = true;
    },
    clearResponse: (state) => {
      state.swapiResponse = "";
      state.isGetInfoButtonDisabled = false;
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
