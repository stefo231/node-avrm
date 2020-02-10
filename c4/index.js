const express = require('express');
const hbs = require('hbs'); // hbs must be required
const bodyParser = require('body-parser');
const iminja = require('./handlers/iminja')


var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
// handlebars.js 
app.set('view engine', 'hbs');


app.get('/', (req, res) => {
    //res.send('ok')
    let data = {
        ime: 'pero'
    };
    res.render('main', data)
});

app.get('/iminja', iminja.getIminja)

app.post('/iminja', iminja.postIminja)

app.listen(8080);