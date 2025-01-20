import Header from "./components/Header/Header"
import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
    <Header />
    </BrowserRouter>
  )
}

export default App
