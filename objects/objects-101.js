let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

console.log(`${myBook.title} written by ${myBook.author}`);

myBook.title = 'Animal Farm';

console.log(`${myBook.title} written by ${myBook.author}`);

let person = {
    name: 'Pooja',
    age: 27,
    location: 'San Jose'
}

console.log(`${person.name} is ${person.age} and lives in ${person.location}`);

person.age = person.age + 1;
console.log(`${person.name} is ${person.age} and lives in ${person.location}`);
