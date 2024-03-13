function calculatePentagonArea(){


    const perimeter = getInputIdValue('pentagon-perimeter');
    const apothem = getInputIdValue('pentagon-apothem');


    const areaOfPentagon = 0.5 * perimeter * apothem;
    setAreaValue('pentagon-area', areaOfPentagon)


}


function  getInputIdValue(inputId){

    const inputValue = parseFloat(document.getElementById(inputId).value);
    return inputValue;
    
}


function setAreaValue(setId, area){

    const setArea = document.getElementById(setId);
    setArea.innerText = area;


}