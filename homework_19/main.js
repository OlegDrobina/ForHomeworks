/*
    Widget constants
*/
const WEEKDAY = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const WIND_DIRECTIONS = [
  {
    name: "N",
    value: [0, 19],
  },
  {
    name: "N",
    value: [0, 19],
  },
  {
    name: "N/NE",
    value: [20, 39],
  },
  {
    name: "NE",
    value: [40, 59],
  },
  {
    name: "E/NE",
    value: [60, 79],
  },
  {
    name: "E",
    value: [80, 109],
  },
  {
    name: "E/SE",
    value: [110, 129],
  },
  {
    name: "SE",
    value: [130, 149],
  },
  {
    name: "S/SE",
    value: [150, 169],
  },
  {
    name: "S",
    value: [170, 199],
  },
  {
    name: "S/SW",
    value: [200, 219],
  },
  {
    name: "SW",
    value: [220, 239],
  },
  {
    name: "W/SW",
    value: [240, 259],
  },
  {
    name: "W",
    value: [260, 289],
  },
  {
    name: "W/NW",
    value: [290, 309],
  },
  {
    name: "NW",
    value: [310, 329],
  },
  {
    name: "NW",
    value: [330, 349],
  },
];
/*
    Weather info elements
*/
const humidityValueEl = document.getElementById("humidity-level");
const pressureValueEl = document.getElementById("pressure-level");
const windValueEl = document.getElementById("wind-level");
const temperatureValueEl = document.getElementById("temperature-info");
const feelsLikeValueEl = document.getElementById("feels-like-info");

/*
    Date time info elements
*/
const dateValueEl = document.getElementById("current-date-info");
const dateTimeValueEl = document.getElementById("current-date-time-info");
const timeValueEl = document.getElementById("current-time-info");
const dateTimeBottomValueEl = document.getElementById(
  "current-date-time-info-bottom"
);

/*
    Batery and refresh button elements
*/
const bateryInfoEl = document.getElementById("batery-info");
const refreshDataEl = document.getElementById("refresh-data-button");

/*
    Refresh data button handler
*/
refreshDataEl.addEventListener("click", () => {
  loadWidgetData();
});

/*
    Load widget data on window load
*/
window.addEventListener("load", loadWidgetData);

/*
    Perform loading of date\time and weather information + change the widget style
    based on the weather
*/
function loadWidgetData() {
  setCurrentDate();
  setCurrentTime();
  getBatteryLevel();
  setCurrentDateTime();
  setWeatherDataInfo();
}

/*
    Date\time manipulation methods
*/

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

function setCurrentDateTime() {
  const dateTimeInfo = getCurrentDateInfo();
  const currentTimeValue = getCurrentTime();
  const monthVal = dateTimeInfo.month;
  const dayVal = dateTimeInfo.day;
  dateTimeBottomValueEl.textContent = `${monthVal} ${dayVal}, ${currentTimeValue}`;
}

function getWeekDayFromDay(day) {
  return WEEKDAY[day];
}

/*
    Battery level information gathering
*/

function getBatteryLevel() {
  const newBatteryPromise = navigator.getBattery();
  newBatteryPromise.then((result) => {
    const bateryInfoEl = document.getElementById("batery-info");
    const bateryLevel = result.level * 100;
    bateryInfoEl.textContent = `Batery level: ${bateryLevel}%`;
  });
}

/*
    Retrieve data about weather using coordinates
*/

function setWeatherDataInfo() {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?lat=40.46667&lon=19.48972&appid=42464cd71517254ed032696a5866b68b&units=metric"
  )
    .then((response) => response.json())
    .then((weatherData) => {
      const humidityValue = weatherData?.main?.humidity;
      const pressureValue = weatherData?.main?.pressure;
      const windSpeedValue = weatherData?.wind?.speed;
      const windDirectionValue = weatherData?.wind?.deg;
      const windDirectionValueName = WIND_DIRECTIONS.find((windItem) => {
        return (
          windItem.value[0] < windDirectionValue &&
          windItem.value[1] > windDirectionValue
        );
      })?.name;
      const tempreatureValue = weatherData?.main?.temp;
      const feelsLikeValue = weatherData?.main?.feels_like;

      const weatherId = weatherData?.weather?.id;

      setWidgetColor(weatherId);
      setWeatherImage(weatherId);
      humidityValueEl.textContent = `Humidity: ${humidityValue}%`;
      pressureValueEl.textContent = `Pressure: ${pressureValue}hPa`;
      windValueEl.textContent = `Wind: ${windSpeedValue} m/s ${windDirectionValueName}`;
      temperatureValueEl.textContent = `${convertStringToCelsius(
        tempreatureValue
      )}`;
      feelsLikeValueEl.textContent = `Feels like: ${convertStringToCelsius(
        feelsLikeValue
      )}`;
    })
    .catch((error) => {
      console.log(`Server request returned error: ${error}`);
    });
}

/*
    Converter for Celsius unit of meassure
*/

function convertStringToCelsius(tempreatureValue) {
  const degrees = new Intl.NumberFormat("en-US", {
    style: "unit",
    unit: "celsius",
  });
  return degrees.format(tempreatureValue);
}

function setWeatherImage(weatherId) {}
function setWidgetColor(weatherId) {}
