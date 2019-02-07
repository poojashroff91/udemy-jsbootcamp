let name;

name = 'Jen';
if(name === undefined){
    console.log('No name found');
} else {
    console.log(name);
}

// Undefined when arguments are not passed
let square = function (num) {
    console.log(num);
}

// Undefined when no return value is passed
let result = square();
console.log(result);


// Null to unset a variable
let age = 27;
age = null;
console.log(age);