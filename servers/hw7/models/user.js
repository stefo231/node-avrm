const mongoose = require('mongoose');

const User = mongoose.model(
    'users',
    {
        first_name: String,
        last_name: String,
        email: String,
        password: String,
    },
    'users'
);

const readAll = () => {
    return new Promise((success, fail) => {
        User.find({}, (err, data) => {
            if(err){
                return fail(err);
            }
            return success(data);
        });
    });
};

const readOne = (id) =>{
    return new Promise ((success, fail) => {
        User.findById( id, 'first_name last_name email', (err,data)=>{
            if(err){
                return fail(err)
            }
            return success(data)
        })
    })
}

const createNew = (data) => {
    return new Promise((success, fail) => {
        let user = new User(data);
        user.save((err) => {
            if(err){
                return fail(err);
            }
            return success();
        });
    });
};

const remove = (id) => {
    return new Promise((success, fail) => {
        User.deleteOne({_id: id}, (err) => {
            if(err){
                return fail(err);
            }
            return success();
        });
    });
};

const update = (id, data) => {
    return new Promise((success, fail) => {
        User.updateOne({_id: id}, data, (err) => {
            if(err){
                return fail(err);
            }
            return success();
        });
    });
};

const getByEmail = (email) => {
    return new Promise((success, fail) => {
        User.findOne({email: email}, (err, data) => {
            if(err){
                return fail(err);
            }
            return success(data);
        });
    });
};

module.exports = {
    readAll,
    readOne, 
    createNew,
    remove,
    update,
    getByEmail
};