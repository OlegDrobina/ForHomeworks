import { Component } from "react";
import VoteResultsComponent from "../VoteResultsComponent/VoteResultsComponent";
import gentlmanImage from "../img/gentleman-men.svg";
import smileImage from "../img/smile.svg"
import punkImage from "../img/punk.svg"
import asianImage from "../img/asian-traditional.svg"
import hipsterImage from "../img/hipster.svg"

class ShowResultsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resultsVisible: false,
            winnerImgSrc: "",
            winnerClickCount: 0
        }
    }

    handleOnClickEvent = () => {
        this.getWinnerInfo();
        this.setState({resultsVisible: true});
    }

    getWinnerInfo = () => {
        const storageData = localStorage.getItem("clicksCount");
        if (storageData === null) {
            return;
        }
        const parsedStorageData = JSON.parse(storageData);
        const maxClickNumElement = parsedStorageData.reduce(function(prev, current) {
            return (prev && prev.clickNum > current.clickNum) ? prev : current
        });
        this.processReceivedWinnerInfo(maxClickNumElement);
    }

    processReceivedWinnerInfo = (winnerInfo) => {
        const {id, clickNum} = winnerInfo;
        let imagePath = "";
        switch (id) {
            case "hipsterEl-id":
                imagePath = hipsterImage;
                break;
            case "punkEl-id":
                imagePath = punkImage;
                break;
            case "asianEl-id":
                imagePath = asianImage;
                break;
            case "smileEl-id":
                imagePath = smileImage;
                break;
            case "gentMan-id":
                imagePath = gentlmanImage;
                break;
            default:
                break;
        }
        this.setWinnerInfoToState(imagePath, clickNum);
    }

    setWinnerInfoToState = (imagePath, clickNum) => {
        this.setState({winnerImgSrc: imagePath});
        this.setState({winnerClickCount: clickNum});
    }

    render() {
        return (
            <div>
                <button id="show-result-button" onClick={this.handleOnClickEvent}>Show result</button>
                {this.state.resultsVisible ? <VoteResultsComponent src={this.state.winnerImgSrc} clickCount={this.state.winnerClickCount} /> : null}
            </div>
        );
    }
}

export default ShowResultsComponent;