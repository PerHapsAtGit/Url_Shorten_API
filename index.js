var express = require('express');
var app = express();
var validator = require('./modules/validator/validator');
var encoder = require('./modules/encoder/encoder');

const port = 80;

// Using in memory storage for URLs
const memoryList = [];

// Open CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.json());

// Redirect to stored URL if found
app.get('*', function (req, res) {
  if (req.url === '/') {
    res.send('Welcome to URL Shortening Service');
    return;
  }

  const index = encoder.decode(req.url.substr(1));
  const url = memoryList[index];
  if (url) {
    res.redirect(url);
  } else {
    res.status(404);
  }
});

// Add URL to storage
app.post('/', function (req, res) {
  const url = req.body.url;
  if(validator(url)) {
    let recordIndex = memoryList.findIndex((item) => {
      return item === url;
    });
    if(recordIndex === -1) {
      recordIndex = memoryList.push(url) - 1;
    }
    
    res.json({
      hash: encoder.encode(recordIndex)
    });
  } else {
    res.status(400);
    res.json({
      errorMsg: 'Invalid URL'
    });
  }
});

app.listen(port, function () {
  console.log(`Url Shortener listening on port ${port}!`);
});