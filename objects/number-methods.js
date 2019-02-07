// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
let num = 103.941;

console.log(num.toFixed(2));

console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));

let min = 0;
let max = 1;
let randomNum = Math.random(); // [0, 1)
console.log(randomNum);

randomNum = Math.floor(Math.random() * (max - min + 1)) + min; // [0, 1)
console.log(randomNum);


// 1 - 5 - true if correct, else false

let makeGuess = function (guess) {
    let min = 1;
    let max = 5;
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min; // [0, 1)
    return (guess === randomNum);
}


console.log(makeGuess(1));
console.log(makeGuess(1));
console.log(makeGuess(1));
console.log(makeGuess(1));
console.log(makeGuess(1));