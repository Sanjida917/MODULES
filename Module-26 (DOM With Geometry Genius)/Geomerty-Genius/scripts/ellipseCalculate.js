function calculateEllipseArea() {


    const majorRadius = getInputIdValue('a-axis');
    const minorRadius = getInputIdValue('b-axis');


    const areaEllipse = 3.14 * majorRadius * minorRadius;
    setInputArea('ellipse-area', areaEllipse);


}

function getInputIdValue(inputId) {

    const inputValue = parseFloat(document.getElementById(inputId).value);
    return inputValue;

}


function setInputArea(inpId, area) {

    const setArea = document.getElementById(inpId);
    setArea.innerText = area ;
}