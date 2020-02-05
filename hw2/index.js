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
    let sentencesNo = data.split('.').length; // number of sentences - fix  this
    let wordsNo = data.split(' ').length; // number of words
    let charNo = data.length - data.split(' ').length;// number of characters
   console.log(`this text has ${sentencesNo} sentences, ${wordsNo} words and ${charNo} characters`);
   let words = data.split(' '); // to split words into an array
//counting length  of words
   let wordsBigger = 0; // word > 7
   let wordsSmaller = 0; // word < 7
   let wordsEven = 0; // word == 7
    for (let i=0;i<wordsNo;i++) {
        //if(words[i].includes('.') || words[i].includes(',') || words[i].includes('!') || words[i].includes('?') || words[i].includes('...')){ // the regex solution comes in handy :)
        let pWord = words[i].replace(/[^0-9a-zA-Z]+/g, ""); // regex to remove everything from a word except characters a-z, A-Z and 0-9
        //}
        // logic for counting words length.. check above
        if (pWord.length > 7) {
            wordsBigger++
        } else if (pWord.length < 7) {
            wordsSmaller++
        } else if (pWord.length == 7) {
            wordsEven++
        }
        // end of logic
    }
    console.log(`${wordsBigger} of these words has length bigger then "7", ${wordsSmaller} less then "7" and ${wordsEven} are even with "7"`);
    
    // cela funcija ludilo
    const findDuplicates = (arr) => {
        let sorted_arr = arr.slice().sort();
        let results = [];
        //////////down
        var current = null;
        var cnt = 0;
        //////up

        for (let i = 0; i < sorted_arr.length - 1; i++) {
           /* if (sorted_arr[i + 1] == sorted_arr[i]) {
              results.push(sorted_arr[i]);
            }*/
            if (sorted_arr[i].replace(/[^0-9a-zA-Z]+/g, "") != current){
                if(cnt>0){
                    console.log(`${current}  --> ${cnt} times`)
                }
                current = sorted_arr[i].replace(/[^0-9a-zA-Z]+/g, "");;
                cnt = 1;
            } else {
                cnt++;
            }
          }

          if(cnt >0){
            console.log(`${current} comes --> ${cnt} times`)
          }
          
          return results;
    }
    console.log(findDuplicates(words))
})
.catch(err => {
    console.log('an error has occured while writing to file');
})
