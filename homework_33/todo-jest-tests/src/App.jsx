import React from 'react';
import TaskRegistrationForm from "./components/TaskRegistrationForm/TaskRegistrationForm"
import ItemsList from "./components/ItemsList/ItemsList"
import ModifyItem from "./components/ModifyItem/ModifyItem"
import { Provider } from "react-redux"
import { store } from "./redux/store"

function App() {

  return (
    <Provider store={store}>
      <div id="header-form-id">
        <h1>TODOS</h1>
        <TaskRegistrationForm />
      </div>
      <ItemsList />
      <div id="footer-modify-item-id">
        <label>Text for modification</label>
        <ModifyItem />
      </div>
    </Provider>
  )
}

export default App
