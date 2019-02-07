'use strict';

const noteId = location.hash.substring(1);
let notes = getSavedNotes();
const titleEl = document.querySelector("#note-title");
const bodyEl = document.querySelector("#note-body");
const removeEl = document.querySelector("#remove-note");
const lastEditedEl = document.querySelector("#last-edited"); 

let note = notes.find ( (note) => note.id === noteId);

if(!note) {
    location.assign('/index.html');
}

titleEl.value = note.title;
bodyEl.value = note.body;
lastEditedEl.textContent = generateLastEdited(note.updatedAt);


titleEl.addEventListener('input', (e) => {
    note.title = e.target.value;
    note.updatedAt = moment().valueOf();
    saveNotes(notes);
});

bodyEl.addEventListener('input', (e) => {
    note.body = e.target.value;
    note.updatedAt = moment().valueOf();
    lastEditedEl.textContent = generateLastEdited(note.updatedAt);
    saveNotes(notes);
});

removeEl.addEventListener('click', () => {
    removeNote(note.id);
    saveNotes(notes);
    location.assign('/index.html');

})

window.addEventListener('storage', (e) => {
    if(e.key === "notes") {
        notes = JSON.parse(e.newValue);
        note = notes.find ( (note) => note.id === noteId);
        
        if(!note) {
            location.assign('/index.html');
        } else {
            titleEl.value = note.title;
            bodyEl.value = note.body;
            lastEditedEl.textContent = generateLastEdited(note.updatedAt);
        }
    }
})

