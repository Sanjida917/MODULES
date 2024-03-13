
function x() {

    console.log('x')
    y();
    console.log('xx')
}


function y() {

    console.log('y');
    z();
    console.log('yy');


}

function z() {

    console.log('z')
    console.log('zz')
}

setTimeout(() => {

    console.log('Time Out')
}, 2000);

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))



x();