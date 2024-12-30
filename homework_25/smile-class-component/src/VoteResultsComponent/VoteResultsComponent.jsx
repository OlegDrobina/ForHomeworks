import { Component } from "react";

class VoteResultsComponent extends Component {
    constructor(props) {
       super(props); 
       this.state = {
        width: "100px",
        height: "100px"
       }
    }

    render() {
        return(
            <div>
                <p>Vote results: </p>
                <p>The winner is: </p>
                <img src={this.props.src} width={this.state.width} height={this.state.height}></img>
                <p>Votes count: {this.props.clickCount}</p>
            </div>
        );
    }
}

export default VoteResultsComponent;