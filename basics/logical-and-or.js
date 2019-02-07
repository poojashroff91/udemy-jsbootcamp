let temp = 150;

if(temp >= 60 && temp <=90 ) {
    console.log('It is pretty nice outside');
} else if( temp <= 0 && temp >= 120) {
    console.log('Do not go outside');
} else {
    console.log('Do what you like');
}

let isGuestOneVegan  = true;
let isGuestTwoVegan = false;

if(isGuestOneVegan && isGuestTwoVegan) {
    console.log('Offer vegan menu');
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('Offer some vegan options');
} else {
    console.log('Offer all menu items');
}