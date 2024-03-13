// function calculateRectangleArea() {
// // 
//     const rectLength = parseFloat(document.getElementById('rectengle-length').value);
//     console.log(rectLength);


// }

function calculateRectangleArea() {


    const rectWidth = parseFloat(document.getElementById('rectangle-width').value);
    console.log(rectWidth);

    const rectLength = parseFloat(document.getElementById('rectangle-length').value);
    console.log(rectLength);

    const areaOfRectangle = rectWidth * rectLength;

    const displayArea = document.getElementById('rectangle-area');
    displayArea.innerText = areaOfRectangle;


}