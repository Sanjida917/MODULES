

//String - Slice
const address = "BosilaCityHousing";
const part = address.slice(0, 6)
//slice(start,end before)
//First part - starting index
//second part - before ending index

console.log(part);




//Split a string into substrings using the specified separator and return them as an array.
const sentence = 'I Am A Very Good Girl';
console.log(sentence.split('G'));



const flowers = 'Orchid, Dahlia, Sun-Flower, Rose, Tulip. Deffodil, Tube-Rose';
const flower = flowers.split(',');
console.log(flower);


//join is for array
const busket = ['Orchid', ' Dahlia', ' Sun-Flower', ' Rose', ' Tulip. Deffodil', ' Tube-Rose'];
console.log(busket.join(','))