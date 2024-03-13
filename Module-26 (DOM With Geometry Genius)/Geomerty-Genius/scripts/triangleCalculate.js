
/**
 * Objective :
 * 
 * get base, height of a triangle .Calculate the area by using the provided formula.And then display the area.
 * 
 * 
 * step-01 : get base value of the triangle 
 * step-02 : added an id in the base input field
 * step-03: use getElementById  to access the input field
 * step-04 : get value from the input field
 * step-05 :convert the value to a numbr
 */

function calculateTriangleArea() {

    //triangle base value
    const base = document.getElementById('triangle-base');
    const triangleBase = parseFloat(base.value);

    console.log(triangleBase);

    //triangle heigh value
    const triangleHeight = parseFloat(document.getElementById('triangle-height').value);

    console.log(triangleHeight);

    const areaOfTriangle = (0.5 * triangleBase * triangleHeight);
    console.log("Are Is :", areaOfTriangle);


    //display the area

    const displayArea = document.getElementById('triangle-area');
    displayArea.innerText = areaOfTriangle;
}