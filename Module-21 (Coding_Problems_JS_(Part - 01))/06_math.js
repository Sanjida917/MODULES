

/**
 * If I make a function named "min" within the object "Math", which is the Property of this Obejct.It will be Like this :
 * 
 * const Math = {
 * 
 * min : function min(value1, value2){
 *         return value 2
 *       }
 * 
 *     }
 * 
 * If I want to access that function to print :
 * console.log(Math.min(value1, value2));
 * 
 * so here we can say now, "Math.min" --> is a function of Math Object.
 * 
 */

//Just like Following this, JavaScript Made Some Built-in Functions Which are lies in Objects, for us to find the results easily.



//Finding Minimum value from Any of Numbers
const min = Math.min(2, 4, 5, 6, 7, -9);
console.log("Minimum value is :", min);

//Finding Maximum value from Any of Numbers
console.log("Maximum value is :", Math.max(2, 4, 5, 6, 7, -9));


//value O PI
console.log("Value Of PI :", Math.PI);

//Absolute value --> Converting Into positive
console.log("Absulate Value :", Math.abs(-5 - 10));


//round --> convert to the Nearest full number from a fraction number
console.log("Round A Value :", Math.round(3.99));


//floor --> convert to the lowest/down full number from a fraction ( cut/remove the fractional part)
console.log("Floor of value is :", Math.floor(9.9999));


//ceeling --> convert to the Highest/upper full number from a fraction.
console.log("Ceilling of the value is :", Math.ceil(9.0001));

//Random numbers --> like a lottery (Any numbers can find)
console.log("Random Numbers", Math.round(Math.random() * 5));
