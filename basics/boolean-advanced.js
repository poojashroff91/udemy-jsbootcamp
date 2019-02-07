let isAccountLocked = false;
let userRole = 'admin';

if(isAccountLocked) {
    console.log('Account is locked');
} else if (userRole === 'admin') {
    console.log('Welcome admin');
} else {
    console.log('Welcome');
}

// Challenge area

let temp = 45;

if (temp <= 32)  {
    console.log('It is freezing outside');
} else if( temp >= 110) {
    console.log('It is way too hot outside');
} else {
    console.log('You can go outside');
}