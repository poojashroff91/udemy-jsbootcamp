'use strict';

/*
const todos = [{
    text: 'Order cat food',
    completed: false
}, {
    text: 'Return packages',
    completed: true
}, {
    text: 'Buy stamps',
    completed: false
}, {
    text: 'Set alarm',
    completed: true
}, {
    text: 'Pay bills',
    completed: true
}]; 
*/

const todos = getSavedTodos();



const filters = {
    searchTerm: '',
    hideCompleted: false
}



renderTodos(todos, filters);


/*
//Listen for new todo creation
document.querySelector('#add-todo').addEventListener('click', function(e){
    console.log('Add todo was clicked');
});

//Add a new todo
document.querySelector('#new-todo').addEventListener('input', function(e){
    console.log(e.target.value);
});
*/
document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchTerm = e.target.value;
    renderTodos(todos, filters);
});



document.querySelector('#todo-form').addEventListener('submit', (e) => {
    e.preventDefault();
    todos.push({
        id: uuidv4(),
        text: e.target.elements.todoText.value,
        completed: false
    });
    saveTodos(todos);
    renderTodos(todos, filters);
    e.target.elements.todoText.value = '';
})

document.querySelector("#hide-completed").addEventListener('change', (e) => {
    filters.hideCompleted = e.target.checked;
    renderTodos(todos, filters);
})