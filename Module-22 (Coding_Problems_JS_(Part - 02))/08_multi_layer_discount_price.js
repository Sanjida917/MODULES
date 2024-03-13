
//Single Discount 

/**
 * upto 100 :  ---> 100 
 * 101 - 200 : --> 90
 * more than 200 : --> 70
 */

function discountPrice(quantity) {

    if (quantity <= 100) {
        const total = quantity * 100;
        return total;
    }

    else if (quantity <= 200) {
        const total = quantity * 90;
        return total;
    }

    else {
        const total = quantity * 70;
        return total;
    }
}


const total = discountPrice(201);
console.log(total);



//Multi-Layer Discount

/**
 * first- 100  --> 100 tk
 * 101 - 200  --> 90 tk
 * above 200  --> 70 tk
 */

function layeredDiscountedTotal(quantity) {

    const first100Price = 100;
    const second100Price = 90;
    const above200Price = 70;


    if (quantity <= 100) {

        const total = quantity * first100Price;
        return total;
    }

    else if (quantity <= 200) {

        const total = ((quantity - 100) * second100Price) + (first100Price * 100);
        return total;
    }

    else {

        const total = ((quantity - 200) * above200Price) + (100 * second100Price) + (first100Price * 100);
        return total;

    }


}

console.log("Total After Discount Is : ", layeredDiscountedTotal(201));