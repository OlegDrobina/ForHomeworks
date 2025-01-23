import { Formik, Form, Field, ErrorMessage } from "formik";
import { startProcessFetchResponse } from "../../redux/slices/swapiSlice";
import { useDispatch, useSelector } from "react-redux";
import { Button, Typography } from "@mui/material";
import selectors from "../../redux/slices/selectors";

const swapiReqUrl = () => {
  const getInfoButtonStyle = {
    backgroundColor: "blue",
    textColor: "white",
    color: "azure",
    "&:hover": {
      backgroundColor: "rgba(100, 1, 229, 0.1)",
    },
  };

  const dispatch = useDispatch();
  const initialValues = {
    defaultMethodEndpoint: "people/1/",
  };

  const isGetInfoButtonDisabled = useSelector(
    selectors.isGetInfoButtonDisabled
  );

  const onSubmit = async (values, formikBag) => {
    if (values.hasOwnProperty("url")) {
      dispatch(startProcessFetchResponse(values.url));
    } else {
      dispatch(startProcessFetchResponse(values.defaultMethodEndpoint));
    }
    formikBag.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form className='input-group mb-3 js--swapi_form'>
        <Typography
          component='span'
          className='input-group-text'
          id='basic-addon3'
        >
          https://swapi.tech/api/
        </Typography>
        <Field
          type='text'
          name='url'
          className='form-control js--swapi_input'
          id='basic-url'
          placeholder='people/1/'
        />
        <Button
          variant='outlined'
          type='submit'
          sx={getInfoButtonStyle}
          disabled={isGetInfoButtonDisabled}
        >
          Get info
        </Button>
      </Form>
    </Formik>
  );
};

export default swapiReqUrl;
