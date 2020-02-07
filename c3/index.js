const express = require('express');
const bodyParser = require('body-parser');

const handlers = require('./handlers');

var app = express();

app.use(bodyParser.urlencoded({ extended: false })); // reading body data from post request

app.get('/', handlers.index);
app.get('/greetings', handlers.ime);

app.get('/greetings/:ime', handlers.greetings);




app.get('/calc/:func/:x/:y', handlers.calc1);

app.post('/values', handlers.values);

app.post('/calc', handlers.calc2);

app.listen(8080);