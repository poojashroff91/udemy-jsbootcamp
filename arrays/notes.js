/*const notes = [
    'Note 1',
    'Note 2',
    'Note 3'
];
console.log(notes);

console.log(notes.length);
console.log(notes[0]);
console.log(notes[notes.length - 1]);

console.log(notes.pop());
notes.push('My new note');

console.log(notes.length);
console.log(notes);

console.log(notes.shift());
notes.unshift('This is new');

console.log(notes.length);
console.log(notes);

notes.splice(1,1);
console.log(notes);

notes.splice(1, 0, 'This is a new note at index 1');
console.log(notes);

notes.splice(1, 1, 'This is a new note at index 1');
console.log(notes);

notes[2] = 'This is new note 3';
console.log(notes);

notes.forEach( function (item, index) {
    console.log(index);
    console.log(item);
});

for (let i = 0; i <= 2; i++) {
    console.log(i);
}

for (let i = 0; i < notes.length; i++) {
    console.log(notes[i]);
}

for (let i = notes.length - 1; i >= 0; i--) {
    console.log(notes[i]);
}

console.log(notes.indexOf('Note 2'));
*/

const notes = [{
    title: 'My trip',
    body: 'I went on a trip to Kauai'
}, {
    title: 'My book',
    body: 'I am reading Fire and Blood'
}, {
    title: 'Groceries',
    body: 'We are out of milk and eggs'
}]

/*console.log(notes.length);
console.log(notes);

const index = notes.findIndex( function (note, index) {
    return note.title === 'My book';
});

console.log(index);

const findNote = function (notes, noteTitle) {
    const index = notes.findIndex( function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase();
    });
    return notes[index];
}*/

const findNote = function (notes, noteTitle) {
    return notes.find( function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase();
    });
}

//console.log(findNote(notes, 'groceries'));

const findNotes = function (notes, searchTerm) {
    return filteredNotes = notes.filter( function (note, index) {
        return note.title.toLowerCase().includes(searchTerm) || note.body.toLowerCase().includes(searchTerm);
    });
}

//console.log(findNotes(notes, 'and'));

//console.log(findNotes(notes, 'out'));

console.log('a'<'b');
console.log('march'<'jan');

const sortNotes = function (notes) {
    notes.sort(function (a, b) {
        let aText = a.title.toLowerCase();
        let bText = b.title.toLowerCase();
        if (aText < bText) return -1;
        if (aText > bText) return 1;
        return 0;
    })
}

console.log(sortNotes(notes));