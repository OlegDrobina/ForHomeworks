import { Component } from "react";

class SmileComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clickNum: 0,
            width: "100px",
            height: "100px"
        }
    }

    componentDidMount() {
        this.setStateFromLocalStorage();
    }

    setStateFromLocalStorage() {
        const storageData = localStorage.getItem("clicksCount");
        if (storageData === null) {
            return;
        }
        const currElementId = this.props.id;
        const smileFromLocalStorageIdx = JSON.parse(storageData).findIndex(
            (smileEl) => smileEl.id === currElementId
          );
          if (smileFromLocalStorageIdx !== -1) {
            this.setState({clickNum: JSON.parse(storageData)[smileFromLocalStorageIdx].clickNum})
          }
    }

    performIncrement = () => {
        this.setState({clickNum: this.state.clickNum + 1}, () => {
            this.saveStateToLocalStorage(this.state.clickNum, this.props.id);
        });
        
    }

    saveStateToLocalStorage = (clicksCount, elId) => {
        const storageData = localStorage.getItem("clicksCount");
        if (storageData === null) {
            localStorage.setItem("clicksCount", JSON.stringify([{ id: elId, clickNum: clicksCount }]));
        } else {
            const smileFromLocalStorageIdx = JSON.parse(storageData).findIndex(
                (smileEl) => smileEl.id === elId
              );
              if (smileFromLocalStorageIdx === -1) {
                localStorage.setItem("clicksCount", storageData ? JSON.stringify([
                    ...JSON.parse(storageData),
                    { id: elId, clickNum: clicksCount },
                  ]) : JSON.stringify([{ id: elId, clickNum: clicksCount }]));
              } else {
                const parsedLocalStorage = JSON.parse(storageData);
                parsedLocalStorage[smileFromLocalStorageIdx].clickNum = clicksCount;
                localStorage.setItem("clicksCount", JSON.stringify(parsedLocalStorage));
              }
        }
        
    }

    render() {
        return (
            <div className="smile-component-js">
                <img src={this.props.src} onClick={this.performIncrement} width={this.state.width} height={this.state.height} id={this.props.id}></img>
                <p>{this.state.clickNum}</p>
            </div> 
        );
    }
}

export default SmileComponent;