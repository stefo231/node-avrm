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

read('lorem.txt')
.then(data =>{
    let sentencesNo = data.split('.').length; // fix  this
    let wordsNo = data.split(' ').length;
    let charNo = data.length - data.split(' ').length;
   console.log(`this text has ${sentencesNo} sentences, ${wordsNo} words and ${charNo} characters`);
   let words = data.split(' ');
//counting length  of words
   let wordsBigger = 0;
   let wordsSmaller = 0;
   let wordsEven = 0;
    for (let i=0;i<wordsNo;i++) {
        //if(words[i].includes('.') || words[i].includes(',') || words[i].includes('!') || words[i].includes('?') || words[i].includes('...')){ // the regex solution comes in handy :)
        let pWord = words[i].replace(/[^0-9a-zA-Z]+/g, ""); // regex to remove everything from a word except characters a-z, A-Z and 0-9
        //}
        if (pWord.length > 7) {
            wordsBigger++
        } else if (pWord.length < 7) {
            wordsSmaller++
        } else if (pWord.length == 7) {
            wordsEven++
        }
    }
    console.log(`${wordsBigger} of these words has length bigger then "7", ${wordsSmaller} less then "7" and ${wordsEven} are even with "7"`);
})
.catch(err => {
    console.log('an error has occured while writing to file');
})



