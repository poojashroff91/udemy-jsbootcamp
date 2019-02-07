let add = function(a, b, c) {
    return a + b + c;
}

let result = add(12, 1, 12);
console.log(result);


// Default args

let getScoreTest = function (name = 'Anonymous', score = 0) {
    return ('Name: ' + name + ' - Score: ' + score);
}

console.log(getScoreTest());
console.log(getScoreTest('Andrew', 100));
console.log(getScoreTest(undefined, 99));

let getTipCalculator = function (total, tipPercent = 0.2) {
    return total * tipPercent;
}

console.log(getTipCalculator(100));
console.log(getTipCalculator(100, 0.3));
console.log(getTipCalculator(40, 0.3));
// A 25% tip on $40 would be $10
let total = 40;
let tipPercent = .25;
let tip = getTipCalculator(total, tipPercent);
console.log(`A ${tipPercent * 100}% tip on $${total} would be $${tip}`);

//Template string
let name = "Pooja";
let age = 26;
console.log(`Hey, my name is ${name}! I am ${age} years old.`);
