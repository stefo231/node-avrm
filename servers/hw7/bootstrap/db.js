const mongoose = require('mongoose');
const cstring = 'mongodb+srv://Stefan:alfa123$@cluster0-hyvxh.gcp.mongodb.net/auth?retryWrites=true&w=majority'

const initDB = () => {
    mongoose.connect(cstring, {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
        if(err){
            console.log('Could not connect to database');
            return;
        }
    });
}

module.exports = {
    initDB,
};