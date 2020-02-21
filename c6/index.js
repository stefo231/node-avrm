const express = require('express')
const hbs = require('hbs')
const bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var jwt = require('jsonwebtoken');



const db = require('./mongodb/db');
const users = require('./handlers/users');
const auth = require('./handlers/auth');
const dashboard = require('./handlers/dashboard');

db.initDB();
let app = express();

app.set('view engine', 'hbs');
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.use((req, res, next) => {
    let whitelist = [
        '/',
        '/register'
    ];
    if (!whitelist.includes(req.path)) {
        if (req.cookies.jwt) {
            jwt.verify(req.cookies.jwt, auth.tokenKey, (err, payload) => {
                if (err) {
                    console.log('bad credentials')
                   return res.statusCode(401).send('Unauthorized')
                }
                return next();
            })
        } else {
            console.log('no jwt')
            return res.status(401).send('Unauthorized')
        }
    } else {
        return next();
    }

    
})



// routes
app.get('/', auth.viewLogin)
app.post('/', auth.apiLogin)


app.get('/register', auth.viewRegister)
app.post('/register', auth.apiRegister)

app.get('/dashboard', dashboard.viewDashboard)
//app.post('/dashboard', dashboard.apiDashboard)

app.listen(8080, (err) => {
    if (err) {
        console.log('Error')
        return
    }
    console.log('Started on port 8080')
})