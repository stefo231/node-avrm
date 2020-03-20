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

const counting = (data) =>{
    let sentencesNo = data.split(/[\.!?]/).length -1; // number of sentences - fix  this
    let wordsNo = data.split(' ').length -1; // number of words
    let charNo = data.length - data.split(' ').length -1;// number of characters

   let words = data.split(' '); // to split words into an array
    //counting length  of words
   let wordsBigger = 0; // word > 7
   let wordsSmaller = 0; // word < 7
   let wordsEven = 0; // word == 7

   var modeMap = {};
   var maxEl = null 
   var maxCount = 0;

   for (let i=0;i<wordsNo;i++) {
    let pWord = words[i].replace(/[\.!?,]+/g, ""); // regex to remove everything from a word except characters a-z, A-Z and 0-9
    
    // logic for counting words length.. check above
        if (pWord.length > 7) {
            wordsBigger++
        } else if (pWord.length < 7) {
            wordsSmaller++
        } else if (pWord.length == 7) {
            wordsEven++
        }
    // end of logic

      // logic for finding the word with most occurrance //
      var el = pWord;
      if(modeMap[el] == undefined) // null - postoin so vrednost null / undefined - ne postoi
          modeMap[el] = 0;
      else
          modeMap[el]++;

      if(modeMap[el] > maxCount)
      {
          maxEl = el;
          maxCount = modeMap[el];
      }
      // end of logic //
}

console.log(`
this text has 
${sentencesNo} sentences, 
${wordsNo} words and 
${charNo} characters.`);

console.log(`
${wordsBigger} of these words has length greater then "7", 
${wordsSmaller} less then "7" and 
${wordsEven} are even with "7"`);

console.log(`
The word "${maxEl}" is with maximum occurrance and it shows up ${maxCount} times`)

}

module.exports = {
    read,
    counting
}