
//---------------------------------------------------------------------------for-of-loop-----------------------------------------------------------------------------------------------------------
const friends = ['Elon Mask', 'Bill-gates', 'Mark-akerburg', 'Waren'];


console.log("for-of loop:");
for (const friend of friends.reverse()) {

    console.log(friend);
}


//---------------------------------------------------------------------------another-for-of-loop-----------------------------------------------------------------------------------------------------------
const frnds = ['Elon Mask', 'Bill-gates', 'Mark-akerburg', 'Waren'];
console.log("\nfor-of Unshift:");


const rev_num = [];
for (const frnd of frnds) {

    // console.log(frnd);
    rev_num.unshift(frnd)
}
console.log(rev_num);


console.log('\n');

//---------------------------------------------------------------------------for-loop-----------------------------------------------------------------------------------------------------------
const rev_rev_num = [];
const flowers = ['Belly', 'Sun-flower', 'Defodill', 'Rose', 'Orchid', 'Tulip'];

for (let i = flowers.length - 1; i >= 0; i--) {

    console.log(flowers[i]);
    rev_rev_num.push(flowers[i])
}

console.log('In Array :',rev_rev_num);
console.log('\n')

//---------------------------------------------------------------------------Another-for-loop-----------------------------------------------------

const flower = ['Belly', 'Sun-flower', 'Defodill', 'Rose', 'Orchid', 'Tulip'];

const busk = [];
for (let i = 0; i < flowers.length; i++) {

    busk.unshift(flower[i]);
}
   console.log("Busket :",busk);


console.log('\n')

//---------------------------------------------------------------------------Another-for-loop-----------------------------------------------------

const flwrs = ['Belly', 'Sun-flower', 'Defodill', 'Rose', 'Orchid', 'Tulip'];

let con = flwrs.length - 1;
while (con >= 0) {

    console.log(flwrs[con]);

    con--;
}