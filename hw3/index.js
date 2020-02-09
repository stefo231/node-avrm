const express = require('express');
const bodyParser = require('body-parser');

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const fs = require('fs');

var app = express();

app.use(bodyParser.urlencoded({ extended: false}));


/*
const read = ( file ) =>{
   var rawFile = new XMLHttpRequest();
   rawFile.open("GET", file, false);
   rawFile.onreadystatechange = () => {
       if(rawFile.readyState === 4){
           if(rawFile.status === 200 || rawFile.status == 0){
               var allText = rawFile.responseText;
               console.log(allText)
           }
       }
   }
   rawFile.send(null)
}*/

const read = ( file ) => {
    return new Promise(( success, fail ) => {
        fs.readFile(file, 'utf8', (err, data) =>{
            if(err) 
                return fail(err);
            return success(data);
        })
    })
}

const showText = (data) =>{
    let ime = data.split(' ')

    console.log(ime)
}


app.get('/', (req, res) =>{
    res.send('ok');
})

app.get('/imenik', (req, res) =>{
    res.send(read('imenik.txt')
    .then(data => data)
    //.then(text => console.log(text))
    .catch(err => { console.log('an error has occured while writing to file'); })
    );
})

//read('imenik.txt').then((result)=>{console.log(result)})



app.listen(8080);