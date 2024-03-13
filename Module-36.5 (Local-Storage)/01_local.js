

localStorage.setItem('Name', 'Sanjida Mahfuj');
console.log(localStorage.getItem('Name'));


const getAge = () => {

    localStorage.setItem('age', 25);
    const age = localStorage.getItem('age');
    console.log(age);
}


const getObject = () => {

    const mySelf = {

        name: 'Sanjida Papon',
        age: 25,
        hobby: 'Reading Books',
        Occupation: 'Computer Engineer'

    }

    //in local Storage it is not allowed to console/get the object value directly.
    console.log(localStorage.getItem('mySelf'));


    //So, we have to follow some indirect steps to get the value as an object

    // 1. converted the object to string
    const stringObj = JSON.stringify(mySelf);
    console.log(stringObj);

    //2. parse the string value to object again by JSON
    const parseObject = JSON.parse(stringObj);
    console.log(parseObject);


    //now ge can get the properties of the object

    const age = mySelf.age;

    //the result will be same as object is a non primitive value(share the same locatin)
    console.log(age);
    console.log(parseObject.age)



}