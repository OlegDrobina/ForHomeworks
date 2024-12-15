const SWAPICardBody = () => {
    return (
        <div className = 'card'>
            <span className="badge d-none bg-secondary js--swapi_controller">people</span>
            <span className="badge d-none bg-secondary js--swapi_id">1</span>
            <div className="load d-none js--swapi_load">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
            <pre className="mt-2 mb-0 js--swapi_pre"></pre>
        </div>
    )
}

export default SWAPICardBody;