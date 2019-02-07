'use strict';

// getSavedTodos
const getSavedTodos = () => {
    const todosJson = localStorage.getItem('todos');
    try {
        return todosJson ? JSON.parse(todosJson) : [];
    } catch (e) {
        return [];
    }
}

// save to local storage

const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
}

// render todos

const renderTodos = (todos, filters) => {

    const filteredTodos = todos.filter( (todo)  => {
        const searchTermMatch = todo.text.toLowerCase().includes(filters.searchTerm.toLowerCase());
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed;
        return searchTermMatch && hideCompletedMatch;
    });
    console.log(filteredTodos);

    const incompleteTodos = filteredTodos.filter((todo) => !todo.completed);
    document.querySelector('#todos').innerHTML = '';
    document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos));
    
    filteredTodos.forEach( (todo) => {
        document.querySelector('#todos').appendChild(generateTodoDom(todo));
    });
    

}

const removeTodo = (id) => {

    const todoIndex = todos.findIndex ( (todo) => todo.id === id);

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1);
    }

}

const toggleTodo = (id) => {

    const todo = todos.find ( (todo) => todo.id === id );

    if (todo) {
        todo.completed = !todo.completed;
    }

}

const generateTodoDom = (todo) => {
    const todoElem =document.createElement('div');

    const textElem =document.createElement('span');
    textElem.textContent = todo.text;

    const checkboxElem =document.createElement('input');
    checkboxElem.setAttribute('type', 'checkbox');
    checkboxElem.checked = todo.completed;

    checkboxElem.addEventListener('click', () => {
        toggleTodo (todo.id);
        saveTodos(todos);
        renderTodos(todos, filters);
    });

    const buttonElem =document.createElement('button');
    buttonElem.textContent = 'x';

    buttonElem.addEventListener('click', () => {
        removeTodo(todo.id);
        saveTodos(todos);
        renderTodos(todos, filters);
    });

    todoElem.appendChild(checkboxElem);
    todoElem.appendChild(textElem);
    todoElem.appendChild(buttonElem);

    return todoElem;
}

const generateSummaryDOM = (incompleteTodos) => {
    const summaryEl = document.createElement('h2');
    summaryEl.textContent = `You have ${incompleteTodos.length} todos left`;  
    return summaryEl;
}