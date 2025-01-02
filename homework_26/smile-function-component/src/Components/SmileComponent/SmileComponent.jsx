import { useEffect, useState } from "react";

const SmileComponent = (props) => {
    const [clickNum, setClickNum] = useState(0);
    const width = "100px";
    const height = "100px";
    const { id } = props;

    const performIncrement = () => {
        setClickNum(prevCount => prevCount + 1);
        saveStateToLocalStorage(clickNum + 1, id)
    }

    useEffect(() => {
        setStateFromLocalStorage(); 
    }, []);

    const setStateFromLocalStorage = () => {
        const storageData = localStorage.getItem("clicksCount");
        if (storageData === null) {
            return;
        }
        const currElementId = props.id;
        const smileFromLocalStorageIdx = JSON.parse(storageData).findIndex(
            (smileEl) => smileEl.id === currElementId
          );
          if (smileFromLocalStorageIdx !== -1) {
            setClickNum(JSON.parse(storageData)[smileFromLocalStorageIdx].clickNum);
          }
    }

    const saveStateToLocalStorage = (clicksCount, elId) => {
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

    return (
        <div className="smile-component-js">
            <img src={props.src} onClick={performIncrement} width={width} height={height} id={props.id}></img>
            <p>{clickNum}</p>
        </div> 
    );
}

export default SmileComponent;