import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [], isLoading: false, isCompleted: false };
export const tasksListSlice = createSlice({
  name: "tasksList",
  initialState,
  reducers: {
    addToDo: (state) => {
      state.isLoading = true;
    },
    addItem: (state, action) => {
      state.items.push(action.payload);
      state.isLoading = false;
    },
    fetchToDo: (state) => {
      state.isLoading = true;
    },
    fetchItems: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    },
    deleteToDo: (state) => {
      state.isLoading = true;
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      state.isLoading = false;
    },
    completeToDo: (state) => {
      state.isLoading = true;
    },
    completeItem: (state, action) => {
      state.items.find((item) => item.id == action.payload.id).isCompleted =
        action.payload.isCompleted;
      state.isLoading = false;
    },
    modifyToDo: (state) => {
      state.isLoading = true;
    },
    modifyItem: (state, action) => {
      state.items.find((item) => item.id == action.payload.id).text =
        action.payload.text;
      state.isLoading = false;
    },
  },
});

export const {
  addToDo,
  addItem,
  deleteToDo,
  deleteItem,
  fetchToDo,
  fetchItems,
  completeToDo,
  completeItem,
  modifyToDo,
  modifyItem,
} = tasksListSlice.actions;
