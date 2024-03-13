


/**
 * What is Callback function ?
 * 
 * Callback is a function passed as an argument to another function.
 * This technique allows a function to call another function.
 * A callback function can run after another function has finished.
 * 
 */



function greeting(Greetings, greetName) {
    Greetings(greetName);
}



function greetingHandler(name) {
    console.log("Good Morning", name);
}

function greetEvening(name) {
    console.log("Good Evening", name)
}

function greetNight(name) {
    console.log("Good Night ", name)
}



greeting(greetingHandler, "Mahsan");
greeting(greetEvening, "Tahsan");
greeting(greetNight, "Rafsan");
