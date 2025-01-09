import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import tasksListSlice from '../../redux/slices/tasksListSlice';

const TaskRegistrationForm = () => {
    const dispatch = useDispatch();

    const initialValues = {
        taskCaption: ''
    };


    const onSubmit = (values, formikBag) => {
        dispatch(tasksListSlice.actions.addItem({id: +new Date(), text: values.taskCaption}));
        formikBag.resetForm();
    };
  
    return (
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
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