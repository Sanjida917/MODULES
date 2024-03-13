
function calculateRhombasArea() {

    const diagonal1 = parseFloat(getInputIdValue('rhombas-diagonal1'));
    console.log("diagonal-1 is : ", diagonal1);
    const diagonal2 = parseFloat(getInputIdValue('rhombas-diagonal2'));
    console.log("diagonal-2 is : ", diagonal2);

    const areaOfRhombas = 0.5 * diagonal1 * diagonal2;



    setRhombasArea('rhombas-area', areaOfRhombas);

}

function getInputIdValue(inputId) {

    const input = document.getElementById(inputId);
    const inputValue = input.value;


    return inputValue;

}


function setRhombasArea(inputId, area) {

    const input = document.getElementById(inputId);

    input.innerText = area;

}

