const fs = require('fs');
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

read('domasna.txt')
.then(data =>{
    console.log('file.txt');
    console.log(data)
})
.catch(err => {
    console.log('an error has occured while writing to file')
})