var bcrypt = require('bcryptjs')
var users = require('../models/users')
var jwt = require('jsonwebtoken');

const tokenKey = 'pwd123!'

const viewLogin = (req, res) => {
    res.render('login')
}

const apiLogin = (req, res) => {
    if (req.body.email !== undefined && req.body.email.length > 0 &&
        req.body.password !== undefined && req.body.password.length > 0) {
        users.getByEmail(req.body.email)
            .then(data => {
                console.log(data.password)
                if (bcrypt.compareSync(req.body.password, data.password)) {
                    // token creation
                    let token = jwt.sign({ email: data.email }, tokenKey);
                    res.cookie('jwt', token)

                    res.redirect('/dashboard')
                } else {
                    res.redirect('/?err=1')
                }
            })
            .catch(err => {
                console.log(err)
                res.redirect('/')
            })
    } else {
        res.redirect('/?err=2')
    }
}


const viewRegister = (req, res) => {
    res.render('register')
}


const apiRegister = (req, res) => {
    if (req.body.first_name !== undefined && req.body.first_name.length > 0 &&
        req.body.last_name !== undefined && req.body.last_name.length > 0 &&
        req.body.email !== undefined && req.body.email.length > 0 &&
        req.body.password !== undefined && req.body.password.length > 0 &&
        req.body.password2 !== undefined && req.body.password2.length > 0 &&
        req.body.password2 == req.body.password
    ) {
        let hash = bcrypt.hashSync(
            req.body.password,
            bcrypt.genSaltSync(10)
        );

        users.createNew({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: hash
        })
            .then(() => {
                //res.status(201).send('created')
                res.redirect('/')
            })
            .catch(err => {
                console.log(err)
                res.status(500).send('internal server error')
            })
    } else {
        res.status(400).send('bad request')
    }

}


module.exports = {
    viewLogin,
    apiLogin,
    viewRegister,
    apiRegister,
    tokenKey
}