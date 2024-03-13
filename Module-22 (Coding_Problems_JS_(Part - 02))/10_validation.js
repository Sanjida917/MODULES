
function multiply(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {

        return 'Please provide a number arguments';
    }

    const mult = num1 * num2;
    return mult;
}

const result = multiply(4, 3);
if (typeof result !== 'number') {

    console.log("Error..!", result);
}

else {
    console.log("The result Is :", result);
}


function fullName(firstName, secondName) {

    if (typeof firstName !== 'string') {

        return 'Your First Name Should Be A String'
    }

    else if (typeof secondName !== 'string') {

        return 'Your Second Name Should Be A String'
    }

    const full = firstName + ' ' + secondName;
    return full;
}

const storeName = fullName("Sanjida","Mahfuj" );


if (typeof storeName !== 'string') {

    console.log("Error!");
}

console.log("Full name Is :", storeName);