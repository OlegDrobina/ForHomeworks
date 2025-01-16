import { all, call, put, takeEvery } from "redux-saga/effects";
import API from "./constants/constants.js";
import {
  fetchToDo,
  fetchItems,
  addToDo,
  addItem,
  deleteToDo,
  deleteItem,
  completeToDo,
  completeItem,
  modifyToDo,
  modifyItem,
  clearToDo,
  clearItems,
} from "./slices/tasksListSlice";

function fetchHelper(url, options) {
  return fetch(url, options).then((response) => {
    if (!response.ok) {
      throw new Error("Http error");
    }
    return response.json();
  });
}

//  Workers

function* fetchItemsSaga() {
  try {
    const todos = yield call(fetchHelper, API.URL_TODO);
    yield put(fetchItems(todos));
  } catch (e) {
    console.error(e);
  }
}

function* addItemSaga(action) {
  try {
    const todo = yield call(fetchHelper, API.URL_TODO, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: action.payload }),
    });

    yield put(addItem(todo));
  } catch (e) {
    console.error(e);
  }
}

function* deleteItemSaga(action) {
  try {
    const todo = yield call(fetchHelper, `${API.URL_TODO}/${action.payload}`, {
      method: "DELETE",
    });

    yield put(deleteItem(todo));
  } catch (e) {
    console.error(e);
  }
}

function* completeItemSaga(action) {
  try {
    const todo = yield call(
      fetchHelper,
      `${API.URL_TODO}/${action.payload.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(action.payload),
      }
    );

    yield put(completeItem(todo));
  } catch (e) {
    console.error(e);
  }
}

function* modifyItemSaga(action) {
  try {
    const todo = yield call(
      fetchHelper,
      `${API.URL_TODO}/${action.payload.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(action.payload),
      }
    );

    yield put(modifyItem(todo));
  } catch (e) {
    console.error(e);
  }
}

//  Requested resource doesn't return Access-Control-Allow-Origin header in the response
//  usage of no-cors mode is not an option since we cannot pass the Token header in the request
function* clearItemsSaga(action) {
  try {
    const todo = yield call(fetchHelper, API.URL_CLEAR, {
      mode: "cors",
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
        Token:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI2NzdjMWRiZTIwODI0MTAwYzA3YmYwZWEiLCJpYXQiOjE3MzYxODczMjYzNDYsImV4cCI6MTc5OTI1OTMyNjM0Nn0.u96H3fxgl6jda1Yy5MW-TFUhqtvY8CbHDUwuw4V_VlY",
      }),
      body: JSON.stringify({ count: 0 }),
    });

    yield put(clearItems(todo));
  } catch (e) {
    console.error(e);
  }
}

//  Watchers
function* watchFetchToDo() {
  yield takeEvery(fetchToDo.type, fetchItemsSaga);
}

function* watchAddItem() {
  yield takeEvery(addToDo.type, addItemSaga);
}

function* watchDeleteItem() {
  yield takeEvery(deleteToDo.type, deleteItemSaga);
}

function* watchCompleteItem() {
  yield takeEvery(completeToDo.type, completeItemSaga);
}

function* watchModifyItem() {
  yield takeEvery(modifyToDo.type, modifyItemSaga);
}

function* watchClearItems() {
  yield takeEvery(clearToDo.type, clearItemsSaga);
}

export default function* rootSaga() {
  yield all([
    watchFetchToDo(),
    watchAddItem(),
    watchDeleteItem(),
    watchCompleteItem(),
    watchModifyItem(),
    watchClearItems(),
  ]);
}
