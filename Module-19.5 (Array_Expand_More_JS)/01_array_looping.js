/**
 * Loops For Array :
 * 1) For loop
 * 2) while loop
 * 3) do-while loop
 * 4) for of
 * 5)for in -->This is an obect loop
 * 
 */


const friends = ['Elon Mask', 'Bill-gates', 'Mark-akerburg', 'Waren'];


for (const friend of friends) {

    console.log(friend);
}

for (let i = 0; i < friends.length; i++) {

    console.log(friends[i]);
}

console.log('\n')

let con = 0;
while (con > friends.length) {

    console.log(friends[con]);

    con++;
}