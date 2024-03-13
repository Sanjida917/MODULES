
//Convert inches to feet
function inchToFeet(inch) {

    const feet = inch / 12;
    const feetNumber = parseInt(feet);
    const feetInch = inch % 12;

    const finalHeight = feetNumber + ' Feet & ' + feetInch + ' Inches ';
    return finalHeight;
}

const myHeight = 61;
console.log("My Height is :", inchToFeet(myHeight));




//Miles to Killometer Conversion
function milesToKM(miles) {

    const km = miles * 1.60934;
    const roundKM = parseInt(km);
    return miles + " Miles = " + roundKM + ' Kilometer';

}
console.log(milesToKM(18));




//Kilometer Ti Miles
function kmToMiles(km) {

    const miles = km * 0.621371;
    const roundMiles = parseInt(miles);
    return km + "Kilometer = " + roundMiles + "Miles";
}

console.log(kmToMiles(100));