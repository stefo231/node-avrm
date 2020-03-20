// actualy the whole app //

let conv = require('./converter'); //import convertions
const readline = require('readline'); //import readline for keybord input
// defining function for extra fun
options = () => {
    //to register keypress
readline.emitKeypressEvents(process.stdin);
    process.stdin.setRawMode(true);
    //mapping the keys
    const keyMap = new Map();
    
    keyMap.set('a', 'km to miles'); //kilometers to miles
    let a = conv.km2mile(15);
    
    keyMap.set('b', 'miles to km'); // miles to kilometers
    let b = conv.mile2km(15);
    
    keyMap.set('c', 'l to gal'); // liters to gallons
    let c = conv.lit2gal(15);
    
    keyMap.set('d', 'gal to l'); // gallons to liters
    let d = conv.gal2lit(15);
    
    keyMap.set('e', 'deg to rad'); // degrees to radians
    let e = conv.deg2rad(15);
    
    keyMap.set('f', 'rad to deg'); // radians to degrees
    let f = conv.rad2deg(15);
    
    keyMap.set('g', 'kg to lbs'); // kilograms to pounds
    let g = conv.kg2lbs(15);
    
    keyMap.set('h', 'lbs to kg'); // pounds to kilograms
    let h = conv.lbs2kg(15);
    
    keyMap.set('i', 'C to K'); // celsius to kelvins
    let i = conv.cel2kel(15);
    
    keyMap.set('j', 'K to C'); // kelvins to celsius
    let j = conv.kel2cel(15);
    //end of key mapping

    //listing key and value for convertions
    listKeys = () => {
        console.log('key - value is 15 for every measurement. I need to fix this')
        keyMap.forEach((val, key) => {
            console.log(`${key} - ${val}`);
        });
        console.log();
    }
//end of..


//logic for pressed keys and what they do
process.stdin.on('keypress', (str, key) =>{
    if (key.ctrl && key.name == 'c') {
        process.exit(); // so we can exit from application
    } else if(key.name == 'l') {
        listKeys();
        console.log('Choose an option to convert');
    } else {
        switch(key.name) {
            case 'a':
                console.log(`You pressed the "${str}" key to convert from kilometers to miles`);
                console.log(`${a.toFixed(2)} km`);
            break;
            case 'b':
                console.log(`You pressed the "${str}" key to conver from miles to kilometers`);
                console.log(`${b.toFixed(2)} miles`);
            break;
            case 'c':
                console.log(`You pressed the "${str}" key to conver from liters to gallons`);
                console.log(`${c.toFixed(2)} gal`);
            break;
            case 'd':
                console.log(`You pressed the "${str}" key to conver from gallons to liters`);
                console.log(`${d.toFixed(2)} l`);
            break;
            case 'e':
                console.log(`You pressed the "${str}" key to conver from degrees to radians`);
                console.log(`${e.toFixed(2)} rad`);
            break;
            case 'f':
                console.log(`You pressed the "${str}" key to conver from radians to degrees`);
                console.log(`${f.toFixed(2)} deg`);
            break;
            case 'g':
                console.log(`You pressed the "${str}" key to conver from kilograms to pounds`);
                console.log(`${g.toFixed(2)} lbs`);
            break;
            case 'h':
                console.log(`You pressed the "${str}" key to conver from pouns to kilograms`);
                console.log(`${h.toFixed(2)} kg`);
            break;
            case 'i':
                console.log(`You pressed the "${str}" key to conver from celsius to kelvins`);
                console.log(`${i.toFixed(2)} K`);
            break;
            case 'j':
                console.log(`You pressed the "${str}" key to conver from kelvins to celsius`);
                console.log(`${j.toFixed(2)} C`);
            break;
            default:
                console.log(`No convertion defined for "${str}" key`)
        }       
    }
});// end of logic for pressed keys..
    
};

//exporting this file/function
module.exports = {
    options
}