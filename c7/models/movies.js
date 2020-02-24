const mongoose = require('mongoose');

const Movie = mongoose.model(
    'movies',
    {
        title: String,
        release_date: Date,
        director: String,
        actors:  [String],
        genre: [String],
    },
    'movies'
);

const readAll = () => {
    return new Promise((success, fail) => {
        Movie.find({}, (err, data) => {
            if(err){
                return fail(err);
            }
            return success(data);
        });
    });
};

const readOne = (id) =>{
    return new Promise ((success, fail) => {
        Movie.findById( id, 'first_name last_name email', (err,data)=>{
            if(err){
                return fail(err)
            }
            return success(data)
        })
    })
}


const createNew = (data) => {
    return new Promise((success, fail) => {
        let movie = new Movie(data);
        movie.save((err) => {
            if(err){
                return fail(err);
            }
            return success();
        });
    });
};

const remove = (id) => {
    return new Promise((success, fail) => {
        Movie.deleteOne({_id: id}, (err) => {
            if(err){
                return fail(err);
            }
            return success();
        });
    });
};

const update = (id, data) => {
    return new Promise((success, fail) => {
        Movie.updateOne({_id: id}, data, (err) => {
            if(err){
                return fail(err);
            }
            return success();
        });
    });
};


module.exports = {
    readAll,
    readOne, 
    createNew,
    remove,
    update
};