const express = require('express');
const bodyParser = require('body-parser');
const rotes = require('./rotes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('funcionando');
});

app.use('/api', rotes)

const port = 3001;

app.listen(port, () => {
    console.log('server running on http://localhost:', port);
})