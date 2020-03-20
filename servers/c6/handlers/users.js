const users = require('../models/users');

const reader = (req, res) => {
    users.readAll()
        .then(data => {
            res.render('dashboard', { login: data })
        })
        .catch(err => {
            console.log('Error has occured while reading from DB')
            res.status(500).send('Could not read from DB')
            return
        })
}


const creator = (req, res) => {
    var item = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
    }
    users.createNew(item)
        .then(() =>
            res.redirect('/')
        )
        .catch(err => {
            console.log('Error has occured while creating new Item')
            res.status(500).send('Could not create new item')
            return
        })

}


const deleter = (req, res) => {
    let id = req.body._id
    users.removeItem(id)
        .then(() =>
            res.redirect('/')
        )
        .catch(err => {
            console.log('Error has occured while creating new Item')
            res.status(500).send('Could not create new item')
            return
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

module.exports = {
    reader,
    creator,
    deleter,
    updater
}