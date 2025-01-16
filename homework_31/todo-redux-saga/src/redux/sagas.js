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
} from "./slices/tasksListSlice";
//workers

function fetchHelper(url, options) {
  return fetch(url, options).then((response) => {
    if (!response.ok) {
      throw new Error("Http error");
    }
    return response.json();
  });
}

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

//watchers
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

export default function* rootSaga() {
  yield all([
    watchFetchToDo(),
    watchAddItem(),
    watchDeleteItem(),
    watchCompleteItem(),
    watchModifyItem(),
  ]);
}
