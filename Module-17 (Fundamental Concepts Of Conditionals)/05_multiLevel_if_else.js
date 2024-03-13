/*
 
Multilevel Conditions

*/

const price = 3000;

if (price >= 5000) {

    //10% Discount
    const discount = price * 10 / 100;
    const payAmount = price - discount;
    console.log("Your Payable Amount is", payAmount);
}

else if (price >= 3000) {

    //5% Discount
    const discount = price * 5 / 100;
    const payAmount = price - discount;
    console.log("Your Payable Amount is", payAmount);
}

else {

    console.log("Your Payable Amount is", price);
}



//--------------------------------------Another Example --------------------------------------------

const age = 80;
const pricee = 500;

if (age <= 12 || age >= 80) {

    console.log("You can Eat For Free ..!!")
}

else if (age >= 60) {
 
    //50% Discount
    const discount = pricee * 50 / 100;
    const payAmount = pricee - discount;
    console.log("Your Payable Amount is", payAmount);

}

else if (age >= 50) {

    //30% Discount
    const discount = pricee * 30 / 100;
    const payAmount = pricee - discount;
    console.log("Your Payable Amount is", payAmount);

}

else if (age >= 40) {

    //10% Discount
    const discount = pricee * 10 / 100;
    const payAmount = pricee - discount;
    console.log("Your Payable Amount is", payAmount);

}

else {

    console.log("Your Amount Is:", pricee)

}