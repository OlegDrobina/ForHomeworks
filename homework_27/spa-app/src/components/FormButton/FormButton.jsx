const FormButton = (props) => {
    const { className, title } = props;

    return (
        <button className={className}>{title}</button>
    )
}

export default FormButton;
