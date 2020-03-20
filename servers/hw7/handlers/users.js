var bcrypt = require('bcryptjs');
var user = require('../models/user');

const viewNewUser = (req, res) => {
    res.render('user_create')
}

const apiNewUser = (req, res) => {
    if (req.body.first_name !== undefined && req.body.first_name.length > 0 &&
        req.body.last_name !== undefined && req.body.last_name.length > 0 &&
        req.body.email !== undefined && req.body.email.length > 0 &&
        req.body.password !== undefined && req.body.password.length > 0 &&
        req.body.password2 !== undefined && req.body.password2.length > 0 &&
        req.body.password2 === req.body.password
    ) {
        let hash = bcrypt.hashSync(
            req.body.password,
            bcrypt.genSaltSync(10)
        );

        user.createNew({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: hash
        })
            .then(() => {
                console.log('Successfully created a new user!')
                res.redirect('/dashboard');
            })
            .catch(err => {
                console.log(err);
                res.redirect('/users/new?err=1')
            });
    } else {
        res.redirect('/users/new?err=2');
    }
}

const viewEditUser = (req, res) => {
    let user_id = req.params.id;
    user.readOne(user_id)
    .then(data => {
        console.log(data)
        res.render('user_edit', {user_id:user_id, users: data});
    })
    .catch(err => {
        console.log(err);
        res.status(500).send('internal server error');
    });

    //let user_fname = req.params.first_name;
    //res.render('user_edit', { user_id: user_id });
}

const apiEditUser = (req, res) => {
    let id = req.body.id;
    let data ={
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email
    }
    console.log(id)
    console.log(data)

    user.update(id,data)
        .then(() => {
            console.log('Successfully user update!');
            res.redirect('/dashboard')
        })
        .catch(err => {
            console.log('Error has occured while updating the user')
            res.status(500).send('Could not update the user')
            //return
        })
}

const apiDeleteUser = (req, res) => {
    let id = req.params.id
    console.log(id)
    user.remove(id)
        .then(() =>
            res.redirect('/dashboard')
        )
        .catch(err => {
            console.log('Error has occured while deleting the user')
            res.status(500).send('Could not delete user')
            return
        })
}

module.exports = {
    viewNewUser,
    apiNewUser,
    viewEditUser,
    apiEditUser,
    apiDeleteUser
}