const express = require('express');
const routes = require('./route');


const app = express();;

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

app.use('/', routes);

const port = 3001;

app.listen(port, () => {
  console.log('server running on http://localhost:', port);
})