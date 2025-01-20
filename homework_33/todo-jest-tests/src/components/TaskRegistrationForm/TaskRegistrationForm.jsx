import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addToDo } from '../../redux/slices/tasksListSlice';
import selectors from '../../redux/slices/selectors';

const TaskRegistrationForm = () => {
    const dispatch = useDispatch();

    const isLoading = useSelector(selectors.isLoading);

    const initialValues = {
        taskCaption: ''
    };


    const onSubmit = async (values, formikBag) => {
        dispatch(addToDo(values.taskCaption));
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
            <ErrorMessage id="validationErrorMessage" name="taskCaption" className="error-message" component="div" />
          </div>
          <div>
          <button id="submitButton" type="submit" className='btn btn-primary' disabled={isLoading}>Submit</button>
          </div>
        </Form>
      </Formik>
    );
  };
  
  export default TaskRegistrationForm;