const fs = require('fs');
const STUDENTS_FILE = './students.json';

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

const write = (file, content) => {
    return new Promise((success, fail) => {
        fs.writeFile(file, content, (err) => {
            if (err) {
                return fail(err);
            }
            return success();
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



const postStudents = (req, res) => {
    read(STUDENTS_FILE)
        .then(data => {
            //res.render('students', out);
            data = JSON.parse(data);
            data.push({
                id: new Date().getTime(),
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                address: req.body.address,
                avg_grade: Number(req.body.avg_grade)
            })
            data = JSON.stringify(data);
            write(STUDENTS_FILE, data)
                .then(() => {
                    res.redirect('/students')
                })
                .catch(err => {
                    console.log('Could not write to file');
                    res.status(500).send('Could not write file');
                    return;
                })
        })
        .catch(err => {
            console.log('Error reading file.');
            res.status(500).send('Could not read file.');
            return
        });
}

// to update /student/:id

const getStudent = (req, res, next) => {
    read(STUDENTS_FILE)
        .then(data => {
            let out = {
                students: JSON.parse(data)
            }
            for (i = 0; i < out.students.length; i++) {
                if (out.students[i].id == req.params.id) {
                    console.log(out.students[i])
                    res.render('students', out.students[i])
                    console.log('success')
                }
            }
        })
        .catch(err => {
            console.log('Error reading file.');
            res.status(500).send('Could not read file.');
            return
        });
}

const updateStudent = (req, res) => {

    var id = req.body.id;
    var fname = req.body.first_name_Update;
    var lname = req.body.last_name_Update;
    var address = req.body.address_Update;
    var avg_grade = req.body.avg_grade_Update;

    fs.readFile(STUDENTS_FILE, 'utf8', (err, data) => {
        if (err) {
            console.log('Error reading file')
            res.status(500).send('Could not read the file')
            return;
        }
        data = JSON.parse(data)
        let fileObj = data;

        fileObj.find(curr => {
            if (curr.id == id) {
                curr.first_name = fname;
                curr.last_name = lname;
                curr.address = address;
                curr.avg_grade = avg_grade;

            }
        })
        data = JSON.stringify(fileObj);
        fs.writeFile(STUDENTS_FILE, data, (err) => {
            if (err) {
                console.log('Error writing file')
                res.status(500).send('Could not write the file')
                return;
            }
            res.redirect('/students');
        });
    });
}

const deleteStudent = (req, res) => {

    var id = req.body.id;

    fs.readFile(STUDENTS_FILE, 'utf8', (err, data) => {
        if (err) {
            console.log('Error reading file')
            res.status(500).send('Could not read the file')
            return;
        }
        data = JSON.parse(data)
        let fileObj = data;
        var index = fileObj.findIndex(obj => obj.id == id);
            if (index > -1) {
                fileObj.splice(index, 1);
            }
     
        data = JSON.stringify(fileObj);
        fs.writeFile(STUDENTS_FILE, data, (err) => {
            if (err) {
                console.log('Error writing file')
                res.status(500).send('Could not write the file')
                return;
            }
            res.redirect('/students');
        });
    });
}



module.exports = {
    getStudents,
    postStudents,
    getStudent,
    updateStudent,
    deleteStudent
}