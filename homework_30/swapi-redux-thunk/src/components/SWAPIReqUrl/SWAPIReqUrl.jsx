import { Formik, Form, Field, ErrorMessage } from 'formik';
import { getData } from '../../redux/slices/swapiSlice'
import { useDispatch } from 'react-redux';

const SWAPIReqUrl = () => {
    const dispatch = useDispatch();
    const initialValues = {
        defaultMethodEndpoint: "people/1/"
    }

    const onSubmit = async (values, formikBag) => {
        if (values.hasOwnProperty("url")) {
            dispatch(getData(values.url));
        } else {
            dispatch(getData(values.defaultMethodEndpoint));
        }
        formikBag.resetForm();
    }

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
            <Form className="input-group mb-3 js--swapi_form">
                <span className="input-group-text" id="basic-addon3">https://swapi.tech/api/</span>
                <Field type="text" name="url" className="form-control js--swapi_input" id="basic-url" placeholder="people/1/" />
                <button className="btn btn-outline-secondary" id="button-addon2">Get info</button>
            </Form>
        </Formik>
    )
}

export default SWAPIReqUrl;