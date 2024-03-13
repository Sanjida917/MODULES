

function checkName(name) {

    if (typeof name !== 'string') {

        return 'invalid'
    }

    const last = name[name.length - 1].toLowerCase();;

    if (last === 'a' || last === 'y' || last === 'i' || last === 'e' || last === 'o' || last === 'u' ||
        last === 'w') {

        return "Good Name !"
    }

    else {
        return "Bad Name !"
    }
}


console.log(checkName("sanjida"));
console.log(checkName(["Rashed"]));

