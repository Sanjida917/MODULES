// const { reject } = require("async")


const myLoader = () => {

    return new Promise((resolve, reject) => {
        const success = Math.random();

        if (success <= 0.5) {
            resolve(success);
        }


        else (
            reject(success)
        )
    });
}

myLoader() //like fetch
    .then(data => console.log('Resolved data ', data))
    .catch(err => console.log('Rejected With Value ', err))



//If it is done with function
async function loadData() {

    const response = await fetch('');
    const data = await response.json();

    console.log(data);
}

loadData();


//If it is done with arrow function

const taskLoader = async () => {

    const res = await fetch('');
    const data = await res.json();

    console.log(data);
}

taskLoader();
