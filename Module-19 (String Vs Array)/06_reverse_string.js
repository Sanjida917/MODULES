const sentence = "I am learning web development.";
//reverse sentence : .tnempoleved bew gninrael ma I


let rev = '';
for (let i = sentence.length - 1; i >= 0; i--) {

    rev =  rev + sentence[i] ;
}
    console.log("Reverse Form Is :", rev);






//------------------------------------for loop----------------------------------------------------------------------------------------------------

let reverse = '';
for (const letter of sentence) {

    reverse = letter + reverse;

}

console.log(reverse);





//------------------------------------Whie Loop--------------------------------------------------

let indx =0;
let rverse = '';

while(indx < sentence.length){

    rverse = sentence[indx] + rverse;
    indx++;
}

console.log("Reverse With While Loop :",rverse);


//SHORTCUT WAY

const reversee = sentence.split('').reverse().join('');
console.log("With Shortcut :",reversee);