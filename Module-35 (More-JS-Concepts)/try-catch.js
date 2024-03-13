function checkAge() {

    const ageField = document.getElementById('age-range');
    const ageText = ageField.value;

    const errorTag = document.getElementById('error');

    try {

        const age = parseInt(ageText);

        if (isNaN(age)) {

            throw "Please Enter A Number";
        }

        else if (age < 18) {
            throw "Baccha-Kaccha not allowed";
        }

        else if (age > 30) {

            throw "Murubbis Are Not Welcome";
        }

        errorTag.innerHTML = '';
    }

    catch (err) {
        console.log("ERROR : ", err);
        errorTag.innerHTML = ` ERROR : `+ err;
    }

    finally {
        console.log("All done in Try-catch");
    }
    // console.log("Sanjida Mahfuj");

}