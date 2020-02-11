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
                    res.render('student', out.students[i])
                    console.log('success')
                }
                
            }
            
            //res.render('students', out.students[i]);
            //console.log(out.students.length)
        })
        .catch(err => {
            console.log('Error reading file.');
            res.status(500).send('Could not read file.');
            return
        });
}

const putStudent = (req, res) => {

}
const deleteStudent = (req, res) => {

}



module.exports = {
    getStudents,
    postStudents,
    getStudent,
    putStudent,
    deleteStudent
}