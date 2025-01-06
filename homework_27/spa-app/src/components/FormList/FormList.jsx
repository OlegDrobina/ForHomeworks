import FormItem from "../FormItem/FormItem";

const FormList = (props) => {
    const { values } = props;

    return (
        <ul className="listwrapper">
            {values.map((item) => {
                return <FormItem text={item} />
            })}
        </ul>
    ) 
}

export default FormList;