const express = require('express');
const morgan = require('morgan');
var cors = require('cors');

const app = express();
app.use(cors());
const PORT = process.env.PORT || 8080;

// This is a HTTP request logger
app.use(morgan('tiny'));

// Define our routes
app.get('/api', (req, res) => {
  const data = {
    username: 'ayelenmarie',
    type: 'cool',
  };

  res.json(data);
});

app.listen(PORT, console.log(`Server is starting at ${PORT}`));
