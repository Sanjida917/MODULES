
function calculateParallelogramArea() {

    const paraBase = parallelogramBase();

    const paraHeight = parallelogramHeight();

    const areaOfParallelogram = paraBase * paraHeight;

    const displayArea = document.getElementById('parallelogram-area');
    displayArea.innerText = areaOfParallelogram;
}


function parallelogramBase() {

    const base = parseFloat(document.getElementById('parallelogram-base').value);
    console.log(base)

    return base;

}
function parallelogramHeight() {

    const height = parseFloat(document.getElementById('parallelogram-height').value);
    console.log(height);

    return height;
}