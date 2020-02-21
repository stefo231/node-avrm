const users = require('../models/users');

const viewDashboard = ( req, res ) => {
    users.readAll()
    .then(data => {
        console.log(data)
        res.render('dashboard', { users: data })
    })
    .catch(err => {
        console.log('Error has occured while reading from DB')
        res.status(500).send('Could not read from DB')
        return
    })
    //res.render('dashboard')
}


module.exports = {
    viewDashboard
}