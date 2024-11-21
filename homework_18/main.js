let startTimerValue = "10:15";
let processTimerId;
const timerEl = document.getElementById("timer");
timerEl.textContent = startTimerValue;

window.addEventListener("load", startTimer);

function startTimer() {
  processTimerId = setInterval(processTimerValue, 1000);
}

const processTimerValue = () => {
  let minutesVal = parseInt(
    startTimerValue.substring(0, startTimerValue.indexOf(":"))
  );
  let secondsVal = parseInt(
    startTimerValue.substring(
      startTimerValue.indexOf(":") + 1,
      startTimerValue.length
    )
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
  startTimerValue = `${minutesVal}:${secondsVal}`;
  timerEl.textContent = startTimerValue;
  if (minutesVal == "00" && secondsVal == "00") {
    clearInterval(processTimerId);
  }
};
