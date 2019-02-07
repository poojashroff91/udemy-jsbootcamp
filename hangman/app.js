// Primitive values - string, number, boolean, null undefined

// Object: myObject --> Object.prototype --> null
// Array: myArray --> Array.prototype --> Object.prototype --> null
// Function: myFunc --> Function.prototype --> Object.prototype --> null
// String: myString --> String.prototype -->  Object.prototype --> null
// Number: myNumber --> Number.prototype --> Object.prototype --> null
// Boolean: myBoolean --> Boolean.prototype --> Object.prototype --> null

let game1;

const puzzleEl = document.querySelector('#hangman-word');
const statusEl = document.querySelector('#status');

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode);
    game1.makeGuess(guess);
    render();
});

const render = () => {
    puzzleEl.textContent = game1.puzzle;
    statusEl.textContent = game1.statusMessage;
}

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    game1 = new Hangman(puzzle, 5)
    render();
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()

/*
getPuzzle('2').then((puzzle)=>{
    console.log(puzzle)
}).catch((error) => {
    console.log(`Error: ${error}`)
});

getCountry('US').then ( (data) => {
    console.log(data.name);
}).catch( (error) => {
    console.log(`Error is: ${error}`);
})
*/

/*
getLocation().then( (location) => {
    //console.log(`You are in ${location.city} ${location.region}, ${location.country}`)
    return getCountry(location.country)
}).then((country) => {
    console.log(country.name);
}).catch( (error) => {
    console.log(`Error is: ${error}`);
}) 


getCurrentCountry().then( (country) => {
    console.log(country);
}).catch( (error) => {
    console.log(`Error is : ${error}`);
})

*/