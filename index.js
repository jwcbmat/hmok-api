const express = require('express');
const bodyParser = require('body-parser');
const rotes = require('./rotes');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get('/', (req, res) => {
  res.send('funcionando');
});

app.use('/api', rotes);

const port = 3001;

app.listen(port, () => {
  console.log('server running on http://localhost:', port);
})