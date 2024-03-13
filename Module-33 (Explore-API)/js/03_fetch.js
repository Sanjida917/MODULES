// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => console.log(response)) //.Json is not sililar but close to JSON.parse
//     .then(json => console.log(json))


// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json))


//also can use in a function
function loadData() {

    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    fetch(url)
        .then(resp => resp.json())
        .then(jsn => console.log(jsn))

    //can change the names 

}

