let mc = require('./modules/counter');

mc.read('lorem.txt')
.then(data =>{
    mc.counting(data);
})
.catch(err => {
    console.log('an error has occured while writing to file');
})
