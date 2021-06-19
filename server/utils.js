require('dotenv').config();
const axios = require('axios');
const _ = require('lodash');

// API URL to use
const forecastURL = `https://api.openweathermap.org/data/2.5/onecall?`;

exports.getForecast = (lat, lon) => {
  return axios
    .get(
      `${forecastURL}&lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${process.env.WEATHER_KEY}&units=metric`
    )
    .then((response) => {
      const forecast = response.data;
      const current = forecast.current;
      const daily = forecast.daily;

      // Normalize current forecast
      const currentForecast = {
        date: current.dt * 1000,
        sunrise: current.sunrise * 1000,
        sunset: current.sunset * 1000,
        temperature: current.temp,
        feelsLike: current.feels_like,
        pressure: current.pressure,
        humidity: current.humidity,
        dewPoint: current.dew_point,
        uvIndex: current.uvi,
        clouds: current.clouds,
        visibility: current.visibility,
        windSpeed: current.wind_speed,
        windDirection: current.wind_deg,
        weather: {
          title: current.weather[0].main,
          description: current.weather[0].description,
          icon: current.weather[0].icon,
        },
      };

      // Normalize extended daily forecast
      const dailyForecast = daily.map((day) => {
        return {
          date: day.dt * 1000,
          sunrise: day.sunrise * 1000,
          sunset: day.sunset * 1000,
          temperature: {
            morning: day.temp.morn,
            day: day.temp.day,
            evening: day.temp.eve,
            night: day.temp.night,
            minimum: day.temp.min,
            maximum: day.temp.max,
          },
          feelsLike: {
            morning: day.feels_like.morn,
            day: day.feels_like.day,
            evening: day.feels_like.eve,
            night: day.feels_like.night,
          },
          pressure: day.pressure,
          humidity: day.humidity,
          dewPoint: day.dew_point,
          uvIndex: day.uvi,
          clouds: day.clouds,
          windSpeed: day.wind_speed,
          windDirection: day.wind_deg,
          weather: {
            title: day.weather[0].main,
            description: day.weather[0].description,
            icon: day.weather[0].icon,
          },
        };
      });

      return { currentForecast, dailyForecast };
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
};
