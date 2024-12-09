/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// ./src/batery-info.js
function getBatteryLevel() {
  //TODO: add processing of this method in different browsers. Currently overcomed with try/catch
  try {
    const newBatteryPromise = navigator.getBattery();
    newBatteryPromise.then((result) => {
      const bateryInfoEl = document.getElementById("batery-info");
      const bateryLevel = result.level * 100;
      bateryInfoEl.textContent = `Batery level: ${bateryLevel}%`;
    });
  } catch (exception) {
    console.log(exception);
  }
}

;// ./src/main.js



/*
    Coordinates (default value is set for Kyiv)
*/
const LATITUDE = 50.450002;
const LONGITUDE = 30.523333;

/*
    Widget constants
*/
const WEEKDAY = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const WIND_DIRECTIONS = [
  {
    name: "N",
    value: [350, 361],
  },
  {
    name: "N",
    value: [0, 19],
  },
  {
    name: "NNE",
    value: [20, 39],
  },
  {
    name: "NE",
    value: [40, 59],
  },
  {
    name: "ENE",
    value: [60, 79],
  },
  {
    name: "E",
    value: [80, 109],
  },
  {
    name: "ESE",
    value: [110, 129],
  },
  {
    name: "SE",
    value: [130, 149],
  },
  {
    name: "SSE",
    value: [150, 169],
  },
  {
    name: "S",
    value: [170, 199],
  },
  {
    name: "SSW",
    value: [200, 219],
  },
  {
    name: "SW",
    value: [220, 239],
  },
  {
    name: "WSW",
    value: [240, 259],
  },
  {
    name: "W",
    value: [260, 289],
  },
  {
    name: "WNW",
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
const widgetMainContainer = document.querySelector("div");
const humidityValueEl = document.getElementById("humidity-level");
const pressureValueEl = document.getElementById("pressure-level");
const windValueEl = document.getElementById("wind-level");
const temperatureValueEl = document.getElementById("temperature-info");
const feelsLikeValueEl = document.getElementById("feels-like-info");
const weatherImageEl = document.getElementById("weather-image");
const weatherDescription = document.getElementById("detailed-weather-info");

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
  setCurrentDateTimeForBottomElement();
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

function setCurrentDateTimeForBottomElement() {
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
    Retrieve data about weather using coordinates
*/

function setWeatherDataInfo() {
  const serviceUrl = formServiceUrl();
  fetch(serviceUrl)
    .then((response) => response.json())
    .then((weatherData) => {
      const humidityValue = weatherData?.main?.humidity;
      const pressureValue = weatherData?.main?.pressure;
      const windSpeedValue = weatherData?.wind?.speed;
      const windDirectionValue = weatherData?.wind?.deg;
      const windDirectionValueName = WIND_DIRECTIONS.find((windItem) => {
        return (
          windItem.value[0] <= windDirectionValue &&
          windItem.value[1] > windDirectionValue
        );
      })?.name;
      const tempreatureValue = weatherData?.main?.temp;
      const feelsLikeValue = weatherData?.main?.feels_like;
      const weatherId = weatherData?.weather[0]?.id;
      const receivedWeatherInfo = {
        weatherId: String(weatherId),
        humidity: humidityValue,
        pressure: pressureValue,
        windSpeed: windSpeedValue,
        windDirectionName: windDirectionValueName,
        temperature: tempreatureValue,
        feelsLike: feelsLikeValue,
      };
      processReceivedWeatherInfo(receivedWeatherInfo);
    })
    .catch((error) => {
      console.log(`Server request returned error: ${error}`);
    });
}

/*
    Processes information received from the weather data service
*/

function processReceivedWeatherInfo(weatherInfo) {
  humidityValueEl.textContent = `Humidity: ${weatherInfo.humidity}%`;
  pressureValueEl.textContent = `Pressure: ${weatherInfo.pressure}hPa`;
  windValueEl.textContent = `Wind: ${weatherInfo.windSpeed} m/s ${weatherInfo.windDirectionName}`;
  temperatureValueEl.textContent = `${convertStringToCelsius(
    weatherInfo.temperature
  )}`;
  feelsLikeValueEl.textContent = `Feels like: ${convertStringToCelsius(
    weatherInfo.feelsLike
  )}`;
  setWeatherDescriptionAndImage(weatherInfo.weatherId);
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

/*
    Sets weather description and image. Additionally sets widget color
*/
function setWeatherDescriptionAndImage(weatherId) {
  const weatherCodeStart = weatherId[0];
  let imageName = "";
  let weatherDesctiption = "";
  let widgetColorCode = "1";
  switch (weatherId) {
    case "800":
      imageName = "sunny.webp";
      weatherDesctiption = "Sunny";
      break;
    default:
      switch (weatherCodeStart) {
        case "8":
          imageName = "cloudy.webp";
          weatherDesctiption = "Cloudy";
          widgetColorCode = "2";
          break;
        case "7":
          imageName = "wind.webp";
          weatherDesctiption = "Windy";
          widgetColorCode = "2";
          break;
        case "6":
          imageName = "snow.webp";
          weatherDesctiption = "Snow";
          widgetColorCode = "3";
          break;
        case "5":
          imageName = "rain.webp";
          weatherDesctiption = "Raining";
          widgetColorCode = "2";
          break;
        case "3":
          imageName = "drizzle.webp";
          weatherDesctiption = "Drizzle";
          widgetColorCode = "2";
          break;
        case "2":
          imageName = "thunderstorm.webp";
          weatherDesctiption = "Thunderstorm";
          widgetColorCode = "2";
          break;
        default:
          imageName = "sunnycloud.webp";
          weatherDesctiption = "Sunny cloud";
      }
  }
  const imageValue = `./img/${imageName}`;
  setWidgetColor(widgetColorCode);
  weatherImageEl.src = imageValue;
  weatherDescription.textContent = weatherDesctiption;
}

/*
    Sets widget color
*/
function setWidgetColor(widgetColorCode) {
  widgetMainContainer.className = "";
  switch (widgetColorCode) {
    case "2":
      widgetMainContainer.classList.add("cloudy-weather");
      break;
    case "3":
      widgetMainContainer.classList.add("snowy-weather");
      break;
    default:
      widgetMainContainer.classList.add("sunny-weather");
      break;
  }
}

/*
    Form URL to the weather data service
*/
function formServiceUrl() {
  return `https://api.openweathermap.org/data/2.5/weather?lat=${LATITUDE}&lon=${LONGITUDE}&appid=42464cd71517254ed032696a5866b68b&units=metric`;
}

/******/ })()
;