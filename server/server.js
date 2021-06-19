require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
var cors = require('cors');
const { default: axios } = require('axios');

const app = express();
app.use(cors());
const PORT = process.env.PORT || 8080;

// This is a HTTP request logger
app.use(morgan('tiny'));

// API URLs to use
const forecastURL = `https://api.openweathermap.org/data/2.5/onecall?`;

// Define our route
app.get('/forecast/:lat/:lon', function (req, res) {
  axios
    .get(
      `${forecastURL}&lat=${req.params.lat}&lon=${req.params.lon}&exclude=minutely,hourly,alerts&appid=${process.env.WEATHER_KEY}`
    )
    .then((response) => res.json(response.data))
    .then((forecast) => res.send(forecast))
    .catch((error) => res.send(error));
});

app.listen(PORT, console.log(`Server is starting at ${PORT}`));
