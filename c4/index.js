const express = require('express');
const hbs = require('hbs'); // hbs must be required
const bodyParser = require('body-parser');
const iminja = require('./handlers/iminja')
const students = require('./handlers/students')


var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
// handlebars.js 
app.set('view engine', 'hbs');


app.get('/', iminja.mainOk);

app.get('/iminja', iminja.getIminja)

app.post('/iminja', iminja.postIminja)

app.get('/students', students.getStudents)
app.post('/students', students.postStudents)

app.listen(8080);