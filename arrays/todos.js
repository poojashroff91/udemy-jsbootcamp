/*const todos = [
    'Buy milk',
    'Laundry',
    'Pick up library books'
]

console.log(`You have ${todos.length} todos`);
console.log(todos[0]);
console.log(todos[todos.length - 2]);

console.log(todos);
todos.splice(2, 1);
todos.push('Wash dishes');
todos.shift();
console.log(todos);

todos.forEach( function (todo, index) {
    const num = index + 1;
    console.log(`${num}. ${todo}`);
});

for (let i  = 0; i < todos.length; i++){
    console.log(`${i+1}. ${todos[i]}`);
}*/

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
    completed: false
}, {
    text: 'Pay bills',
    completed: true
}]

//remove todo by test value
const deleteTodo = function (todos, todoText) {

    const todoIndex = todos.findIndex(function (todo) {
        return todo.text.toLowerCase() === todoText.toLowerCase();
    });

    if (todoIndex > -1) todos.splice(todoIndex, 1);

}
//deleteTodo(todos, 'Buy stamps');
//console.log(todos);

// get incomplete todos
const getThingsToDo = function (todos) {
    return todos.filter (function (todo, index) {
        return !todo.completed;
    });
}

//console.log(getThingsToDo(todos));

//sort todos by incomplete first

const sortTodos = function (todos) {
    return todos.sort(function  (a, b) {

        if (a.completed && !b.completed){
            return -1;
        } else if (!a.completed && b.completed){
            return 1;
        } else {
            return 0;
        }

    });
}

console.log(sortTodos(todos));