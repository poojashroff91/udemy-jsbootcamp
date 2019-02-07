
class Person {
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.likes = likes;
    }

    getBio() {
        let bio = `${this.firstName} is ${this.age}. `;

        this.likes.forEach ((like) => {
            bio += `${this.firstName} likes ${like}. `;
        });
        return bio;
    }

    set fullName (fullName) {
        const names = fullName.split(' ');
        this.firstName = names[0];
        this.lastName = names[1];
    }

    get fullName () {
        return `${this.firstName} ${this.lastName}`;
    }
}

class Employee extends Person {
    constructor(firstName, lastName, age, position, likes) {
        super(firstName, lastName, age, likes);
        this.position = position;
    }

    getBio() {
        return `${this.fullName} is a ${this.position}.`;
    }

    getYearsLeft(){
        return 65 - this.age;
    }
}


const myPerson = new Employee('Andrew', 'Mead', 27, 'Software Engineer', ['Teaching']);
console.log(myPerson);
console.log(myPerson.getYearsLeft());

myPerson.fullName = 'Pooja Shroff';
console.log(myPerson.getBio());

const person2 = new Person('Clancey', 'Turner', 54);
console.log(person2.getBio());

const person3 = new Person('Roy', 'Boyle', 56);
console.log(person3.getBio());

/*
const Person = function (firstName, lastName, age, likes = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.likes = likes;
}

Person.prototype.getBio = function () {
    let bio = `${this.firstName} is ${this.age}. `;

    this.likes.forEach ((like) => {
        bio += `${this.firstName} likes ${like}. `;
    });
    return bio;
}

Person.prototype.setName = function(fullName) {
    const names = fullName.split(' ');
    this.firstName = names[0];
    this.lastName = names[1];
}

const me = new Person('Andrew', 'Mead', 27, ['Teaching', 'Biking']);
me.setName('Pooja Shroff');
console.log(me.getBio());

const person2 = new Person('Clancey', 'Turner', 54);
console.log(person2.getBio());

const person3 = new Person('Roy', 'Boyle', 56);
console.log(person3.getBio());
*/


class Student extends Person {

    constructor(firstName, lastName, age, grade, likes){
        super(firstName, lastName, age, likes);
        this.grade = grade;
    }

    getBio(){
        if(this.grade >= 70){
            return `${this.firstName} is passing the course`;
        } else {
            return `${this.firstName} is failing the course`;
        }
    }

    updateGrade(change){
        this.grade += change;
    }

}

const student = new Student('Pooja', 'Shroff', 27, 70, []);
console.log(student.getBio());
student.updateGrade(-40);
console.log(student.getBio());

