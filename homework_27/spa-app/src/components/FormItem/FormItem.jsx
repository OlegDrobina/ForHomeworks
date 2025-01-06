import FormButton from "../FormButton/FormButton";

const FormItem = (props) => {
    const { text } = props;

    return (
        <li className="d-flex justify-content-between mb-2 mt-2 listItem">
            <span>{text}</span>
            <div>
                <FormButton title="Done" className="btn btn-success" />
                <FormButton title="Delete" className="btn btn-danger" />
            </div>
        </li>
    )
}

export default FormItem;