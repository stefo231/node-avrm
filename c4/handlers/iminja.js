const fs = require('fs');

const IMINJA_FILE = './iminja.txt';

const read = (file) => {
    return new Promise((success, fail) => {
        fs.readFile(file, 'utf8', (err, data) => {
            if (err) {
                return fail(err);
            }
            return success(data);
        });
    });
};

const append = (file, content) => {
    return new Promise((success, fail) => {
        fs.appendFile(file, content, (err) => {
            if (err) {
                return fail(err);
            }
            return success();
        });
    });
};


const getIminja = (req, res) => {
    read(IMINJA_FILE)
        .then(data => {
            let out = {
                iminja: data.split(' ')
            }
            res.render('iminja', out);
        })
        .catch(err => {
            console.log('Error reading file.');
            res.status(500).send('Could not read file.');
            return
        });
};

const postIminja = (req, res) => {
    append(IMINJA_FILE, ` ${req.body.ime}`, 'utf8')
        .then(data => {
            //res.send(req.body.name)
            res.redirect('/iminja')
        })
        .catch(err => {
            console.log('an error has occured while append name in the file');
            res.status(500).send('Could not append to file')
            return
        });
};

module.exports = {
    getIminja,
    postIminja
}