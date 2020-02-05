//console.log('Hello World');
// convert to fahren
const c2f = (cel = 0) => {
    return cel * (9/5) + 32;
}
  
//let r = c2f(42);
//console.log(r);


//conver to cels
const f2c = ( far = 0 ) => {
    return (far - 32) * (5/9);
}

//let c = f2c(107);
//console.log(c);


const temp = (val, func) =>{
    console.log(func(val))
    }


//temp(28, c2f);
//temp(82.4, f2c);

const promiseExample = (num) => {
    return new Promise ((success, fail) => {
       /* if(num==0){
            try{
                console.log('About to throw an error');
                throw new Error('Error thrown')
            }
        }*/
        // promise logic
        if(num%2==0){
            success();
        }else{ 
            fail();
        }
        // end of promise logic
    });
}

promiseExample(3)
    .then(()=>{
        console.log('Success! Number is even');
    },
    ()=>{
        console.log('Failure! Number is odd!');
    })
    .catch(err =>{
    console.log('An  error has occured', err);
});

module.exports = {
    c2f,
    f2c,
   // cb,
   // cbTest,
    temp,
    //promiseExample
};