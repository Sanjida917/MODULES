

//part-02
function hideElementById(elementId) {

    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

//part-04
function showElementById(elementId) {

    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function setBackgroundColorById(elementId) {

    const elemnt = document.getElementById(elementId);
    elemnt.classList.add('bg-orange-500', 'font-semibold', 'text-2xl', 'text-black');
}

function removeBackgroundColorById(elementId) {

    const elemnt = document.getElementById(elementId);
    elemnt.classList.remove('bg-orange-500', 'font-semibold', 'text-2xl', 'text-black');
}

function getTextElemenvalueById(elementId) {
    const element = document.getElementById(elementId);

    const elementValueText = element.innerText;

    const value = parseInt(elementValueText);

    return value;
}

function setElementById(elementId, value) {

    const element = document.getElementById(elementId);
    element.innerText = value;

}

function getElemensTextById(elementId) {

    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;

}

function getARendomAlphabet() {

    //get or create an alphabe array
    const alphaString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphaString.split('');
    // console.log(alphabets)


    //get a random number between 0-25

    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);


    const alphabet = alphabets[index].toUpperCase();

    return alphabet;



}
