const express = require('express');
const bodyParser = require('body-parser');

const handlers = require('./handlers');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('ok')
});

//GET method
app.get('/imenik', handlers.reader );

//POST method
app.post('/imenik', handlers.appended);


app.listen(8080);