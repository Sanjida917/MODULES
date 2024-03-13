

//find - Returns the value of the first element in the array where predicate is true, and undefined otherwise.
const playersHeight = [71, 70, 77, 61, 60, 62, 66, 79, 65];

const selected = playersHeight.find(player => player > 75);
console.log(selected);