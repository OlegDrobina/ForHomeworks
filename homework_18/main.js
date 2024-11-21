let timerValue = "10:15";
let processTimerId;
const timerEl = document.getElementById("timer");
timerEl.textContent = timerValue;

window.addEventListener("load", internalExecuteTimer);

function internalExecuteTimer() {
  processTimerId = setInterval(processTimerValue, 1000);
}

const processTimerValue = () => {
  let minutesVal = parseInt(timerValue.substring(0, timerValue.indexOf(":")));
  let secondsVal = parseInt(
    timerValue.substring(timerValue.indexOf(":") + 1, timerValue.length)
  );
  if (secondsVal == 0) {
    secondsVal = 59;
    if (minutesVal != 0) {
      --minutesVal;
    }
  } else {
    --secondsVal;
  }

  minutesVal =
    minutesVal < 10 ? minutesVal.toString().padStart(2, 0) : +minutesVal;
  secondsVal =
    secondsVal < 10 ? secondsVal.toString().padStart(2, 0) : +secondsVal;
  timerValue = `${minutesVal}:${secondsVal}`;
  timerEl.textContent = timerValue;
  if (minutesVal == "00" && secondsVal == "00") {
    clearInterval(processTimerId);
  }
};
