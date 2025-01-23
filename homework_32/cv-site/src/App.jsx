import Header from "./components/Header/Header";
import SwapiPage from "./components/SwapiPage/SwapiPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ToDoListForm from "./components/ToDoListForm/ToDoListForm";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import Footer from "./components/Footer/Footer";
import CvBody from "./components/CvBody/CvBody";

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<CvBody />} />
          <Route path='/todo' element={<ToDoListForm />} />
          <Route path='/swapi' element={<SwapiPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
