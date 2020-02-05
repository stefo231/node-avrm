//console.log('Hello my friend')

const fs = require('fs');
/*
fs.writeFile('message.txt', 'Hello Node.js ', (err) => {
    if (err) throw err;
    console.log('the file has been saved')

    fs.appendFile('message.txt', 'I am an after effect', (err) => {
        if (err) throw err;
        console.log('the data has been added')

        fs.readFile('./message.txt', 'utf8', (err, data) => {
            if(err) throw err;
            console.log(data)
        });
    });
})
*/

// to avoid callback hell we work with promise

const write = ( file, content )=>{
    return new Promise((success, fail) => {
        fs.writeFile(file, content, (err) =>{
            if(err){
                return fail(err);
            }
            return success();
        });
    });
};

const append = ( file, content )=>{
    return new Promise((success, fail) => {
        fs.appendFile(file, content, (err) =>{
            if(err){
                return fail(err);
            }
            return success();
        })
    })
}

const read = ( file ) =>{
    return new Promise(( success, fail) =>{
        fs.readFile(file, 'utf8', (err, data) =>{
            if(err){
                return fail(err);
            }
            return success(data);
        })
    })
}


write('file.txt', 'some content')
    .then(() => {
        //console.log('successfully wrote to file');
        return append('file.txt', 'SOME OTHER CONTENT')
    })
    .then(() =>{
     return read('file.txt')
    })
    .then(data =>{
        console.log('file.text data');
        console.log(data)
    })
    .catch(err => {
        console.log('an error has occured while writing to file')
    })


    let ime = 'stefan';
    let poz = `zdravo ${ime}`


    console.log(poz.length);
    console.log(poz.split('a'))
