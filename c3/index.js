const express = require('express');
const bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended: false })); // reading body data from post request

app.get('/', (req, res) =>{
    res.send('ok');
});
app.get('/greetings', (req, res) =>{
    res.send('pero');
});

app.get('/greetings/:ime', (req, res) =>{ // ime e promenliva
    res.send(req.params.ime);
});

app.listen(8080);


app.get('/calc/:func/:x/:y', (req, res) =>{ // ime e promenliva
    let ress = 0;
    switch(req.params.func){
        case 'add':
            ress = Number(req.params.x) + Number(req.params.y)
        break;
        case 'sub':
            ress = Number(req.params.x) - Number(req.params.y)
            break;
        case 'mul':
            ress = Number(req.params.x) * Number(req.params.y)
            break;
        case 'div':
            ress = Number(req.params.x) / Number(req.params.y)
            break;
        default:
            ress = console.log('oops, smth wenth wrong!')
    }
    res.send('' + ress)
});

app.post('/values', (req, res) =>{
    res.send(`response: ${req.body.age}`)
});

app.post('/calc', (req, res) =>{
    let ress = 0;
    switch(req.body.func){
        case 'add':
            ress = Number(req.body.x) + Number(req.body.y)
        break;
        case 'sub':
            ress = Number(req.body.x) - Number(req.body.y)
            break;
        case 'mul':
            ress = Number(req.body.x) * Number(req.body.y)
            break;
        case 'div':
            ress = Number(req.body.x) / Number(req.body.y)
            break;
        default:
            ress = console.log('oops, smth wenth wrong!')
    }
    res.send('' + ress)
})