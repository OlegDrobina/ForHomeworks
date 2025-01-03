const VoteResults = (props) => {
    const width = "100px";
    const height = "100px";

    return(
        <div>
            <p>Vote results: </p>
            <p>The winner is: </p>
            <img src={props.src} width={width} height={height}></img>
            <p>Votes count: {props.clickCount}</p>
        </div>
    );
}

export default VoteResults;