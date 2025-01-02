import { useState } from "react";
import VoteResultsComponent from "../VoteResultsComponent/VoteResultsComponent";
import gentlmanImage from "../../img/gentleman-men.svg";
import smileImage from "../../img/smile.svg"
import punkImage from "../../img/punk.svg"
import asianImage from "../../img/asian-traditional.svg"
import hipsterImage from "../../img/hipster.svg"

const ShowResultsComponent = (props) => {
    const [resultsVisible, setResultVisible] = useState(false);
    const [winnerImgSrc, setWinnerImgSrc] = useState('');
    const [winnerClickCount, setWinnerClickCount] = useState(0);

    const handleOnClickEvent = () => {
        getWinnerInfo();
        setResultVisible(true);
    }

    const getWinnerInfo = () => {
        const storageData = localStorage.getItem("clicksCount");
        if (storageData === null) {
            return;
        }
        const parsedStorageData = JSON.parse(storageData);
        const maxClickNumElement = parsedStorageData.reduce(function(prev, current) {
            return (prev && prev.clickNum > current.clickNum) ? prev : current
        });
        processReceivedWinnerInfo(maxClickNumElement);
    }

    const processReceivedWinnerInfo = (winnerInfo) => {
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
        processComponentState(imagePath, clickNum);
    }

    const processComponentState = (imagePath, clickNum) => {
        setWinnerImgSrc(imagePath);
        setWinnerClickCount(clickNum);
    }

    return (
        <div>
            <button id="show-result-button" onClick={handleOnClickEvent}>Show result</button>
            {resultsVisible ? <VoteResultsComponent src={winnerImgSrc} clickCount={winnerClickCount} /> : null}
        </div>
    );
}

export default ShowResultsComponent;