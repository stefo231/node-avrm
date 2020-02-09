const fs = require('fs');

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

const reader = (req, res) => {
    read('imenik.txt')
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            console.log('an error has occured while reading the file');
        });
};

const appended = (req, res) => {
    append('imenik.txt', req.body.name, 'utf8')
        .then(data => {
            res.send(req.body.name)
        })
        .catch(err => {
            console.log('an error has occured while append name in the file');
        });

};

module.exports = {
    reader,
    appended
};