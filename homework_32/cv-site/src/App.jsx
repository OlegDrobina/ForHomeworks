import Header from "./components/Header/Header"
import SwapiPage from "./components/SwapiPage/SwapiPage"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ToDoListForm from "./components/ToDoListForm/ToDoListForm"

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/todo" element={<ToDoListForm />} />
        <Route path="/swapi" element={<SwapiPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
