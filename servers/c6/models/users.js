const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var productSchema = new Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
}, { collection: 'users' })

const User = mongoose.model('users', productSchema)

const readAll = () => {
    return new Promise((success, fail) => {
        User.find({}, (err, data) => {
            if (err) {
                return fail(err);
            }
            return success(data);
        })
    })
}


const createNew = (data) => {
    return new Promise((success, fail) => {
        let u = new User(data)

        u.save((err) => {
            if (err) {
                return fail(err);
            }
            return success();
        });
    })
}


const removeItem = (id) => {
    return new Promise((success, fail) =>
        User.deleteOne({ _id: id }, (err) => {
            if (err) {
                return fail(err);
            }
            return success();
        }))
}

const updateItem = (id, data) => {
    return new Promise((success, fail) => {
        User.updateOne({ _id: id }, data, (err) => {
            if (err) {
                return fail(err)
            }
            return success()
        })
    })
}


const getByEmail = (email) => {
    return new Promise((success, fail) => {
        User.findOne({ email: email }, (err, data) => {
            if (err) {
                return fail(err)
            }
            return success(data)
        })
    })
}

module.exports = {
    readAll,
    createNew,
    removeItem,
    updateItem,
    //reader,
    //creator,
    //deleter,
    //updater,
    getByEmail

}
