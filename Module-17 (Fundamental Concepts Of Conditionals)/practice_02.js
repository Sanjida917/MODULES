
/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/




//----------------------------------Ternary Operator------------------------------------------


const weight = 400;
const height = 1.549;

const BMI = weight / height ** 2;
console.log("Your BMI Is :", BMI);

!(BMI < 18.5) ? !(BMI >= 18.5 && BMI <= 24.9) ? !(BMI >= 25 && BMI <= 29.9) ? console.log("You're Obese .!") : console.log("Overweight") : console.log("Normal") : console.log("Underweited");




//-------------------------------------Conditional(If-else)-----------------------------------------------------------------------


if (BMI < 18.5) {

    console.log("You Are Underweited ..!");
}

else if (BMI >= 18.5 && BMI <= 24.9) {

    console.log("You Seems Normal !");
}

else if (BMI >= 25 && BMI <= 29.9) {

    console.log("You Looks Overweight .!!");
}

else {

    console.log("Heeyy..You're Obese .!");
}


//--------------------------------------------Conditional(Nasted-If-else)------------------------------

if (BMI <= 29.9) {

    if (BMI >= 25) {

        console.log("You Looks Overweight .!!");

    }

    else {

        if (BMI >= 18.5 && BMI <= 24.9) {

            console.log("You Seems Normal !");

        }

        else {


            console.log("You Are Underweited ..!");

        }

    }
}

else {

    console.log("Heeyy..You're Obese .!");

}