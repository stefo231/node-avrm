const fs = require('fs');

const STUDENTS_FILE = './students.json';

//new Date().getTime()

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

const getStudents = (req, res) => {
    read(STUDENTS_FILE)
        .then(data => {
            let out = {
                students: JSON.parse(data)
            }
            res.render('students', out);
        })
        .catch(err => {
            console.log('Error reading file.');
            res.status(500).send('Could not read file.');
            return
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

const postStudents = (req, res) => {
    
}

//procitaj

module.exports = {
    getStudents,
    postStudents
}