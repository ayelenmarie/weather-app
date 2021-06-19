require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
var cors = require('cors');
const { default: axios } = require('axios');
const { getForecast } = require('./utils');

const app = express();
app.use(cors());
const PORT = process.env.PORT || 8080;

// This is a HTTP request logger
app.use(morgan('tiny'));

// Define our route
app.get('/forecast/:lat/:lon', function (req, res) {
  getForecast(req.params.lat, req.params.lon)
    .then((forecast) => res.send(forecast))
    .catch((error) => res.send(error));
});

app.listen(PORT, console.log(`Server is starting at ${PORT}`));
