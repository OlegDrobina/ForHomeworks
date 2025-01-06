import { useEffect, useState } from "react";

import FormContent from "../FormContent/FormContent";
import FormHeader from "../FormHeader/FormHeader";
import FormList from "../FormList/FormList";

const FormComplete = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const jsonTodos = localStorage.getItem('todos')
    const todos = jsonTodos ? JSON.parse(jsonTodos) : [];

    setTodos(todos);
  }, []);

  const addItem = (value) => {
    const todos = JSON.parse(localStorage.getItem('todos'));
    let newArray = todos ? [...todos, value] : [value];

    setTodos(newArray);
    localStorage.setItem('todos', JSON.stringify(newArray));
  }

  return (
    <>
    <FormHeader />
    <main className="container">
      <FormContent addItem={addItem} />
      <FormList values={todos} />
    </main>
  </>
  )
}

export default FormComplete
