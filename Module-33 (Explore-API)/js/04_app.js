function loadData2() {

    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))

    //can change the names 

}

function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUsers(data))

}


function displayUsers(dta) {
    console.log(dta)
}