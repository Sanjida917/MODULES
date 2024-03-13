
// function play() {

//    step-1 : Hide the home screen. to hide the screen and the class hidden to the home section

//     const homeSec = document.getElementById('home-screen');
//     homeSec.classList.add('hidden');
//     const playGround = document.getElementById('play-ground');
//     console.log(playGround.classList);
//     playGround.classList.remove('hidden')
// }

function handleKeyboardKeyUp(event) {

    const playerPressed = event.key;


    //stop play the game if pressed "esc"
    if (playerPressed === 'Escape') {

        gameOver();
    }

    //get the exected to press
    const currentAlphabet = document.getElementById('letter');
    targetAlphabet = currentAlphabet.innerText.toLowerCase();
    console.log(playerPressed, targetAlphabet);



    //check matched or not
    if (playerPressed === targetAlphabet) {

        console.log('You got a point');
        removeBackgroundColorById(targetAlphabet);
        continueGame();

        //update score
        //1. get the current score
        const currentScore = getTextElemenvalueById('current-score')

        //2.increase the score by 1
        const newScore = currentScore + 1;

        //3. show the updated score
        setElementById('current-score', newScore);

    }

    else {
        console.log('You missed, you lost a life');
        removeBackgroundColorById(playerPressed);

        //update life
        //1. get the current number of life
        const initialLife = getTextElemenvalueById('initial-life');

        //2.decrease the life number by 1
        const newLife = initialLife - 1;

        //3. show the updated life
        setElementById('initial-life', newLife);

        if (newLife === 0) {

            console.log("Game Over");
            gameOver();
        }
    }


}





//capture keyboard keypress
document.addEventListener('keyup', handleKeyboardKeyUp);



//part-05
function continueGame() {

    //step -01: Generate a random alphabet
    const alphabet = getARendomAlphabet();
    // console.log("Your Alphabet Is :", alphabet);

    const letter = document.getElementById('letter');
    letter.innerText = alphabet;

    setBackgroundColorById(alphabet.toLowerCase());


}

document.getElementById('play-again').addEventListener('click', function () {

    showElementById('play-ground');
    hideElementById('display-score');

    //reset the life and the scores
    setElementById('initial-life', 5);
    setElementById('current-score', 0);


    continueGame();
    // handleKeyboardKeyUp();



})


function play() {

    //part-01
    hideElementById('home-screen');

    //part-03
    showElementById('play-ground');


    
    continueGame();
}

function gameOver() {

    hideElementById('play-ground');
    showElementById('display-score');

    //update score
    const lastScore = getTextElemenvalueById('current-score');
    setElementById('total-score', lastScore);

    // clear the last selected letter
    const currentAlphabet = getElemensTextById('letter').toLowerCase();
    removeBackgroundColorById(currentAlphabet);
}
