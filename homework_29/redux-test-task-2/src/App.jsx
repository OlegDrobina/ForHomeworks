import TaskRegistrationForm from "./components/TaskRegistrationForm/TaskRegistrationForm"
import ItemsList from "./components/ItemsList/ItemsList"
import Footer from "./components/Footer/Footer"
import { Provider } from "react-redux"
import { store } from "./redux/store"

function App() {

  return (
    <Provider store={store}>
      <h1>TODOS</h1>
      <TaskRegistrationForm />
      <h1>Todos list</h1>
      <ItemsList />
      <Footer />
    </Provider>
  )
}

export default App
