

function password(info) {

   


    if ((Object.keys(info).length !== 3) || (info["birthYear"].toString().length !== 4)) {
        return "invalid"
    }

    else {

        const getWeb = info.siteName.charAt(0).toUpperCase() + info.siteName.slice(1);;
        const getName = info.name
        const getYear = info.birthYear;

        const suggestedPassword = getWeb.concat('#').concat(getName).concat("@").concat(getYear);
        return suggestedPassword;
    }
}

console.log(password({name: "kolimuddin" , birthYear: 1999 , siteName: "google" }));
console.log(password({name: "toky", birthYear: 200, siteName: "Facebook" }));
console.log(password({ name: "rahat", birthYear: 2002, siteName: "Facebook"}));

