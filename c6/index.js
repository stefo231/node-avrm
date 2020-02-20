const express = require('express')
const hbs = require('hbs')
const bodyParser = require('body-parser')

const db = require('./mongodb/db');
const users = require('./handlers/users');
const auth = require('./handlers/auth');

db.initDB();
let app = express();
app.set('view engine', 'hbs');
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }));

// routes
app.get('/', auth.viewLogin)
app.post('/', auth.apiLogin)


app.get('/register', auth.viewRegister)
app.post('/register', auth.apiRegister)



app.listen(8080, (err) => {
    if(err){
        console.log('Error')
        return
    }
    console.log('Started on port 8080')
})