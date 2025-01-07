import { useState } from 'react';
import TaskRegistrationForm from './components/TaskRegistrationForm/TaskRegistrationForm';
import ItemsList from './components/ItemsList/ItemsList';
import { TasksContext, tasks } from './tasksContext';

function App() {

  const task = useState(tasks);

  return (
    <TasksContext.Provider value={task}>
    <h1>Todo list</h1>
      <TaskRegistrationForm />
      {task[0].length !== 0 ? <ItemsList items={task} /> : null}
    </TasksContext.Provider>
  )
}

export default App
