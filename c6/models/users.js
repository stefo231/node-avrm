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

const reader = (req, res) => {
    readAll()
        .then(data => {
            res.render('login', { login: data })
        })
        .catch(err => {
            console.log('Error has occured while reading from DB')
            res.status(500).send('Could not read from DB')
            return
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

const creator = (req, res) => {
    var item = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
    }
    createNew(item)
        .then(() =>
            res.redirect('/')
        )
        .catch(err => {
            console.log('Error has occured while creating new Item')
            res.status(500).send('Could not create new item')
            return
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

const deleter = (req, res) => {
    let id = req.body._id
    removeItem(id)
        .then(() =>
            res.redirect('/')
        )
        .catch(err => {
            console.log('Error has occured while creating new Item')
            res.status(500).send('Could not create new item')
            return
        })
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

const updater = (req, res) => {
    let id = req.body.idUp
    let data = {
        first_name: req.body.first_nameUp,
        last_name: req.body.last_nameUp,
        email: req.body.emailUp,
        password: req.body.passwordUp,
    }
    //updateItem(id,data)
    //res.redirect('/')
    return new Promise((success, fail) => {
        User.updateOne({ _id: id }, data, (err) => {
            if (err) {
                return fail(err);
            }
            return success();
        })
        res.redirect('/')
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
    reader,
    creator,
    deleter,
    updater,
    getByEmail

}
