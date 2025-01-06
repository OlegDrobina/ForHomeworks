const FormContent = (props) => {
    const { addItem } = props;

    const sendForm = (event) => {
        event.preventDefault();
        addItem(event.target.todo.value);
    };

    return (
      <form className='d-flex' onSubmit={sendForm}>
        <input name='todo' type='text' className='form-control' />
        <button type='submit' className='btn btn-primary'>
          Send
        </button>
      </form>
    )
}

export default FormContent;