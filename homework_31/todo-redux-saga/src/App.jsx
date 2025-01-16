import TaskRegistrationForm from "./components/TaskRegistrationForm/TaskRegistrationForm"
import ItemsList from "./components/ItemsList/ItemsList"
import { Provider } from "react-redux"
import { store } from "./redux/store"

function App() {

  return (
    <Provider store={store}>
      <h1>TODOS</h1>
      <TaskRegistrationForm />
      <ItemsList />
    </Provider>
  )
}

export default App
