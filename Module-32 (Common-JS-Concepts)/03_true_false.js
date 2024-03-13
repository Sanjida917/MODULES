/**
 * 
 * Truthy Values :
 * ------------------------------------------
 * 1) true
 * 2) any (+ve/-ve) number other than 0
 * 3) any string is truthy other than empty string
 * 4) '0', 'false'  ->as converted as a string
 * 5) {}
 * 6) []
 * 
 * 
 * 
 * 
 * Falsy Values :
 * -------------------------------------------
 * 
 * 1) false
 * 2) 0
 * 3) '' empty string
 * 4) undefined value
 * 5) null
 * 
 */





//check falsy
const x = null;
if (!x) {

    console.log("Value is falsy");
}

else {

    console.log("Value is Falsy")
}




//check truthy
const y = ' ';
if (!!y) {

    console.log("Value is truthy");
}

else {

    console.log("Value is falsy")
}