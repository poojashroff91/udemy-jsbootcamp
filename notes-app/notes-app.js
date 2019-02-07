'use strict';

// Document Object Model (DOM)

// Query and remove
/*
const p = document.querySelector('p');
p.remove();

// Query and remove all
const ps = document.querySelectorAll('p');

ps.forEach(function(p) {
    p.textContent = '*******';
});

const newParagraph = document.createElement('p');
newParagraph.textContent = 'Hi new para here';

document.querySelector('body').appendChild(newParagraph);

*/

const filters = {
    searchText: '',
    sortBy: 'byEdited'
}

// const notes = [{
//     title: 'My trip',
//     body: 'I went on a trip to Kauai'
// }, {
//     title: 'My book',
//     body: 'I am reading Fire and Blood'
// }, {
//     title: 'Groceries',
//     body: 'We are out of milk and eggs'
// }]

let notes = getSavedNotes();



document.querySelector('#create-note').addEventListener('click', () => {
    const id = uuidv4();
    const timestamp = moment().valueOf();
    notes.push({
        id: id,
        title: '',
        body: '',
        createdAt: timestamp,
        updatedAt: timestamp
    });
    saveNotes(notes);
    //renderNotes(notes, filters); // Since we are moving to a new page no need to render notes again
    location.assign(`/edit.html#${id}`);
})
/*
document.querySelector('#remove-all').addEventListener('click', function (e){
    console.log('Delete all notes');
    document.querySelectorAll('.note').forEach(function(note){
        note.remove();
    })
});*/

document.querySelector('#search-text').addEventListener('input', (e) => {
    console.log(e.target.value);
    filters.searchText = e.target.value;
    renderNotes(notes, filters);
})


/*
localStorage.setItem('location', 'San Jose');
console.log(localStorage.getItem('location'));
localStorage.removeItem('location');
localStorage.clear();

const user = {
    name: 'Andrew',
    age: 27
}

const userJson = JSON.stringify(user);
console.log(userJson);
localStorage.setItem('user', userJson);

const userJson = JSON.parse(localStorage.getItem('user'));
console.log(user.name); 
*/



renderNotes(notes, filters);


// document.querySelector("#name-form").addEventListener('submit', function(e){
//     e.preventDefault();
//     console.log(e.target.elements.firstName.value);
//     e.target.elements.firstName.value = '';
// });

// document.querySelector("#for-fun").addEventListener('change', function(e){
//     console.log(e.target.checked);
// })

document.querySelector("#sort-by").addEventListener('change', (e) => {
    filters.sortBy = e.target.value;
    renderNotes(notes, filters);
});

window.addEventListener('storage', (e) => {
    if(e.key === "notes") {
        notes = JSON.parse(e.newValue);
        renderNotes(notes, filters);
    }
})

