import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { addToDo } from "../../redux/slices/tasksListSlice";
import selectors from "../../redux/slices/selectors";
import { Box, Button } from "@mui/material";

const TaskRegistrationForm = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectors.isLoading);

  const initialValues = {
    taskCaption: "",
  };

  const onSubmit = async (values, formikBag) => {
    dispatch(addToDo(values.taskCaption));
    formikBag.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form className='d-flex'>
        <Box>
          <Field
            type='text'
            id='taskCaption'
            name='taskCaption'
            className='form-control'
          />
          <ErrorMessage
            name='taskCaption'
            className='error-message'
            component='div'
          />
        </Box>
        <Box>
          <Button
            id='submitButton'
            type='submit'
            className='btn btn-primary'
            disabled={isLoading}
          >
            Submit
          </Button>
        </Box>
      </Form>
    </Formik>
  );
};

export default TaskRegistrationForm;
