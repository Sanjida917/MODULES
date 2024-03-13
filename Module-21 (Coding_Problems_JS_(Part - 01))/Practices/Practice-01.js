
/**
 * Write a function to convert temperature from Celsius to Fahrenheit.
 * Formula	: (1°C × 9/5) + 32 = 33.8°F
 */

function celsiusToFahrenheit(celsiusTemp) {

    const fahrenheitTemp = (celsiusTemp * (9 / 5)) + 32;
    return fahrenheitTemp;

}

const temperatureCelsius = 2;
console.log(temperatureCelsius, "degree Celsius Is :", celsiusToFahrenheit(temperatureCelsius), "Farenheit")