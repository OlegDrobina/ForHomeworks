const WEEKDAY = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const dateValueEl = document.getElementById("current-date-info");
const dateTimeValueEl = document.getElementById("current-date-time-info");
const timeValueEl = document.getElementById("current-time-info");
const dateTimeBottomValueEl = document.getElementById(
  "current-date-time-info-bottom"
);
const bateryInfoEl = document.getElementById("batery-info");
const refreshDataEl = document.getElementById("refresh-data-button");

refreshDataEl.addEventListener("click", () => {
  window.location.reload();
});
window.addEventListener("load", loadWidgetDataOnInit);

function loadWidgetDataOnInit() {
  setCurrentDate();
  setCurrentTime();
  getBatteryLevel();
  setCurrentDateTime();
}

function setCurrentDate() {
  const dateInfo = getCurrentDateInfo();
  const monthVal = dateInfo.month;
  const dayVal = dateInfo.day;
  const yearVal = dateInfo.year;
  const dayOfWeekTextVal = dateInfo.dayOfWeekText;
  const currentDateInfo = `${monthVal} ${dayVal}, ${yearVal} - ${dayOfWeekTextVal}`;
  dateValueEl.textContent = currentDateInfo;
}

function setCurrentTime() {
  const timeInfo = getCurrentTime();
  timeValueEl.textContent = timeInfo;
}

function getCurrentDateInfo() {
  const year = new Date().getFullYear();
  const month = new Date().toLocaleString("default", { month: "short" });
  const day = new Date().getDate();
  const dayOfWeek = new Date().getDay();
  const dayOfWeekText = getWeekDayFromDay(dayOfWeek);
  return {
    year: year,
    month: month,
    day: day,
    dayOfWeek: dayOfWeek,
    dayOfWeekText: dayOfWeekText,
  };
}

function getCurrentTime() {
  const time = new Date();
  return time.toLocaleString("en-US", {
    hour: "numeric",
    hour12: true,
    minute: "numeric",
  });
}

function getWeekDayFromDay(day) {
  return WEEKDAY[day];
}

function getBatteryLevel() {
  const newBatteryPromise = navigator.getBattery();
  newBatteryPromise.then((result) => {
    const bateryInfoEl = document.getElementById("batery-info");
    const bateryLevel = result.level * 100;
    bateryInfoEl.textContent = `Batery level: ${bateryLevel}%`;
  });
}

function setCurrentDateTime() {
  const dateTimeInfo = getCurrentDateInfo();
  const currentTimeValue = getCurrentTime();
  const monthVal = dateTimeInfo.month;
  const dayVal = dateTimeInfo.day;
  dateTimeBottomValueEl.textContent = `${monthVal} ${dayVal}, ${currentTimeValue}`;
}
