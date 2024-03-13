const sentence = "I am learning web development.";
//reverse sentence : .tnempoleved bew gninrael ma I


let rev = '';
for (let i = sentence.length - 1; i >= 0; i--) {

    rev =  rev + sentence[i] ;
}
    console.log("Reverse Form Is :", rev);