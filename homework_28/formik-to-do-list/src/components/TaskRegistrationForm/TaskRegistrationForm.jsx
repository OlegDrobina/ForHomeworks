import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useContext } from 'react';
import { TasksContext } from '../../tasksContext';

const TaskRegistrationForm = () => {

    const [task, setTask] = useContext(TasksContext);

    const initialValues = {
        taskCaption: ''
    };

    const addTaskToLocalStorage = (id, value) => {
        const todos = JSON.parse(localStorage.getItem('todos'));
        let newArray = todos ? [...todos, {id: id, caption: value}] : [{id: id, caption: value}];
        localStorage.setItem('todos', JSON.stringify(newArray));
    }
  
    const onSubmit = (values, formikBag) => {
        const id = +new Date();
        addTaskToLocalStorage(id, values.taskCaption);
        setTask(prevState => [...prevState, {id: id, caption: values.taskCaption}]);
        formikBag.resetForm();
    };
  
    const validate = (values) => {
      const errors = {};
      if (values.taskCaption.length < 5) {
        errors.taskCaption = "Should contain more than 5 characters";
      }
      return errors;
    };
  
    return (
      <Formik initialValues={initialValues} onSubmit={onSubmit} validate={validate}>
        <Form className='d-flex' >
          <div>
            <Field type="text" id="taskCaption" name="taskCaption" className='form-control' />
            <ErrorMessage name="taskCaption" className="error-message" component="div" />
          </div>
          <div>
          <button id="submitButton" type="submit" className='btn btn-primary'>Submit</button>
          </div>
        </Form>
      </Formik>
    );
  };
  
  export default TaskRegistrationForm;