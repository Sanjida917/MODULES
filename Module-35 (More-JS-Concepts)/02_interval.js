console.log(1);
console.log(2);

//This functions means do this task after completed the all other tasks which is rest below
setTimeout(() => {

    console.log(3);

}, 4000);  //this means wait for 4000 mili Seconds (4 sec) minimun for execution
console.log(4);
console.log(5);
console.log(6);

clearTimeout();


let numbr = 0;
const clockId = setInterval(() => {
    numbr++;


    if (numbr > 5) {

        clearInterval(clockId);
    }
    console.log(clockId, numbr);

}, 2000);
