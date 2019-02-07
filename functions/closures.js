const myFunction = () => {
    const message ='This is my message'
    const printMessage = () => {
        console.log(message)
    }
    return printMessage
}

const myPrintMessage = myFunction()
myPrintMessage()



const createCounter = () => {
    let count = 0;


    return {
        increment(){
            count++;
        },
        decrement(){
            count--;
        },
        get() {
            return count
        }
    }


}

const counter = createCounter()
counter.increment()
counter.increment()
counter.decrement()
counter.count = 0
console.log(counter.get()) //Will be one not zero
console.log(counter)

//Adder
const createAdder = (a) => {
    return (b) => {
        return a + b;
    }
}

const add10 = createAdder(10);
console.log(add10(-2));
console.log(add10(20));

const createTipper = (baseTip) => {
    return (amount) => {
        return amount * baseTip;
    }

}

const tip15 = createTipper(0.15);
console.log(tip15(100));
console.log(tip15(200));

const tip20 = createTipper(0.20);
console.log(tip20(100));
console.log(tip20(200));