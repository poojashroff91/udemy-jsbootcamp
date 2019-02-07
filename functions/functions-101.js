let greetUser = function () {
    console.log('Welcome user');
}

greetUser();
greetUser();
greetUser();

let square = function (num) {
    return (num * num);
}

console.log(square(4));

let convertFarenheitToCelsius = function (farenheit) {
    return (farenheit - 32) * 5 / 9;
}

console.log(convertFarenheitToCelsius(32));
console.log(convertFarenheitToCelsius(68));