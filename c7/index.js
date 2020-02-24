const express = require('express');
const bodyParser = require('body-parser');
const movie = require('./handlers/movies');

const db = require('./bootstrap/db');
db.initDB();
let api = express();



//api.use(bodyParser.urlencoded({ extended: false })); -> za od formular
api.use(bodyParser.json()) // -> za json data

api.get('/movies', movie.viewMovies)
api.post('/movies', movie.apiNewMovie)
api.get('/movies/:id', movie.viewOneMovie)
api.put('/movies/:id', movie.updateMovie)
api.delete('/movies/:id', movie.deleteMovie)

api.listen(8080, err => {
    if (err) {
        console.log(err)
        return
    }
    console.log('listening on port 8080')
    return
})

