// Global scope (convertFarenheitToCelsius, tempOne, tempTwo)
    // Local scope (farenheit, celsius)
        // Local scope (isFreezing)

let convertFarenheitToCelsius = function (farenheit) {
    let celsius = (farenheit - 32) * 5 / 9;

    if(celsius <= 0) {
        let isFreezing = true;
    }
}

let tempOne = convertFarenheitToCelsius(32);
let tempTwo = convertFarenheitToCelsius(68);

console.log(tempOne);
console.log(tempTwo)