// Convertions // 

// 1st convertion - kilometers to miles
const km2mile = (a = 0) => {
    return a / 1.609;
};

// 2nd convertion - miles to kilometers
const mile2km = (b = 0) => {
    return b * 1.609;
};

//3th convertion - liters to gallon
const lit2gal = (c = 0) => {
    return c / 3.785;
};

//4th convertion - gallons to liters
const gal2lit = (d = 0) => {
    return d * 3.785;
};

//5th convertion - degrees to radians
const deg2rad = ( e = 0 ) => {
    return e * (3.1459/180)
};

//6th convertion - radians to degrees
const rad2deg = ( f = 0 ) => {
    return f * (180/3.1459)
};
//7th convertion - kilograms to pounds
const kg2lbs = ( g = 0 ) => {
    return g * 2.205
};
//8th convertion - pounds to kilograms
const lbs2kg = ( h = 0 ) => {
    return h / 2.205
};
//9th convertion - celsius to kelvin
const cel2kel = (i = 0) => {
    return i + 273.15;
};
//10th convertion - kelvin to celsius
const kel2cel = (j = 0) => {
    return j - 273.15;
};

// exporting this file/functions for convertions
module.exports = {
    km2mile,
    mile2km,
    lit2gal,
    gal2lit,
    deg2rad,
    rad2deg,
    kg2lbs,
    lbs2kg,
    cel2kel,
    kel2cel
};