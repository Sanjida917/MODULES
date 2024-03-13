//always use ===
//equal comparison doesn't work for non primitive 

//"Type Coercion" --> Type Coercion refers to the process of automatic or implicit conversion of values from one data type to another.

//'Double Equal' checks only the value whereas the "Triple Equal" checks the value and "the value type "also

const first = 2;
const second = '2';
const third = true;
const fourth = 1;


//at the case of double equal
// 2 == '2'
if (first == second) {

    console.log("Values Are Equal")
}

else {
    console.log("Values Are Not Equal");

}





//at the case of triple equal
// 2 === '2'

if (first === second) {

    console.log("Values Are Equal")
}

else {

    console.log("Values Are Not Equal")
}


// 2 == true

if (first == third) {

    console.log("Values Are Equal")
}

else {


    console.log("Values Are Not Equal")
}


// 2 === true
if (first === third) {

    console.log("Values Are Equal")
}

else {
    console.log("Values Are Not Equal")

}



// 1 == true
if (fourth == third) {

    console.log("Values Are Equal")
}

else {

    console.log("Values Are Not Equal")

}



// 1 === true
if (fourth === third) {

    console.log("Values Are Equal")
}

else {

    console.log("Values Are Not Equal")

}



if ('0' == false) {

    console.log("Values Are Equal")
}

else {

    console.log("Values Are Not Equal")

}





if ('' == false) {

    console.log("Values Are Equal")
}

else {

    console.log("Values Are Not Equal")

}



if ("false" == true) {

    console.log("***Values Are Equal");
}

else {

    console.log("Values Are Not Equal");
}


//comparison of non-priitive 

if ([] == []) {

    console.log("Values Are Equal")
}

else {

    console.log("Values Are Not Equal")

}




if ({} == {}) {

    console.log("Values Are Equal")
}

else {

    console.log("Values Are Not Equal")

}


const x = [];
const y = x;

//When share the same memory address location

if (x == y) {

    console.log("Values Are Equal")
}

else {

    console.log("Values Are Not Equal")

}


const m = { name: "Sanida" };
const n = { name: "Sanida" };
const o = m;


if (m == n) {

    console.log("Values Are Equal")
}

else {

    console.log("Values Are Not Equal")
}



if (m == o) {

    console.log("Values Are Equal")
}

else {

    console.log("Values Are Not Equal")
}

