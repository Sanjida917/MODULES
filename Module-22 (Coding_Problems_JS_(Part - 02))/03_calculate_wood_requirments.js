/** 
 * Wood Requirement :
 * 
 * chair --> 3 cft
 * table --> 10 cft
 * bed --> 50 cft
 */

function woodQuantity(chairQuantity, tableQuantity, bedQuantity) {
    const perChairWood = 3;
    const perTableWood = 3;
    const perBedWood = 3;

    const chairTotalWood = perChairWood * chairQuantity;
    const tableTotalWood = perTableWood * tableQuantity;
    const bedTotalWood = perBedWood * bedQuantity;


    const totalWood = chairTotalWood + tableTotalWood + bedTotalWood;

    return totalWood;
}

const numberOfChair = 8;
const numberOfTable = 3;
const numberOfBed = 2;

const totalQuantity = woodQuantity(numberOfChair, numberOfTable, numberOfBed);
console.log("Total Measurement Is :", totalQuantity,"sft Wood");