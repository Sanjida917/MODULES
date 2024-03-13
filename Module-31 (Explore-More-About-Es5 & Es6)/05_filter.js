
// filter - it selects elements based on a condition and returns an array with the elements that fullfilled the condition. 
// Or Returns the elements of an array that meet the condition specified in a callback function.

const numbers = [3, 5, 34, 41, 55];
const playersHeight = [71, 70, 77, 61, 60, 62, 66, 79, 65];

const selected = playersHeight.filter(p => p > 70);
console.log(selected);

const selected2 = playersHeight.filter(p => p > 80);
console.log(selected2);

const oddNumberHeights = playersHeight.filter(h => h % 2 == 1);
console.log(oddNumberHeights);


const flowerss = ['Dahlia', 'Jui', 'Rose', 'Lily', 'Orchid', 'Sunflower', 'Deffodil', 'Tube-Rose', 'Chinarose', 'Genia', 'Belly', 'Tulip'];

const oddFlwrs = flowerss.filter(flwrs => flwrs.length % 2 == 1);
console.log(oddFlwrs);

const evenFlwrs = flowerss.filter(flwrs => flwrs.length % 2 == 0);
console.log(evenFlwrs);