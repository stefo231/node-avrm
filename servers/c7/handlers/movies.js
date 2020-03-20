var bcrypt = require('bcryptjs');
var movie = require('../models/movies');

const viewMovies = (req, res) => {
    movie.readAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            console.log(err);
            res.status(500).send('internal server error');
        });

}

const apiNewMovie = (req, res) => {

    movie.createNew(req.body)
        .then(() => {   
            res.status(200).send('ok');
        })
        .catch(err => {
            res.status(500).send('internal server error');
        });
}

const viewOneMovie = (res, req) => {
    let movie_id = req.params.id;
    movie.readOne(movie_id)
        .then(data => {
            console.log(data)
            //res.render('user_edit', { movie_id: movie_id, movies: data });
        })
        .catch(err => {
            console.log(err);
            res.status(500).send('internal server error');
        });
}

const updateMovie = (res, req) => {
    let id = req.body.id;
    let data = {
        title: req.body.title,
        release_date: req.body.release_date,
        director: req.body.director,
        actors: req.body.actors,
        genre: req.body.genre,
    }
    console.log(id)
    console.log(data)
    movie.update(id, data)
        .then(() => {
            console.log('Successfully uptaded movie')
            //res.redirect('/blogposts')
        })
        .catch(err => {
            console.log('Error has occured while updating the post')
            res.status(500).send('Could not update the post')
        })
}

const deleteMovie = (res, req) => {

}




module.exports = {
    viewMovies,
    apiNewMovie,
    viewOneMovie,
    updateMovie,
    deleteMovie
}