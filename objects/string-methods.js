let name = '   Pooja Shroff';

// Length property
console.log(name.length);

// Convert to uppercase
console.log(name.toUpperCase());

// Convert to lowercase
console.log(name.toLowerCase());

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

// Includes
let password = '123asfdg234';
console.log(password.includes('password'));

// Trim
console.log(name.trim());

// Challenge
// length is more than 8 and doesn't have the word password

let isValidPassword = function (password) {
    return password.length > 8 && !password.includes('password');
}

console.log(isValidPassword('sddjhj'));
console.log(isValidPassword('spasswordjhj'));
console.log(isValidPassword('dgshjjks672sdgs'));
