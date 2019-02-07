const now = new Date();
console.log(now.toString());
const timestamp =(now.getTime());

const myDate = new Date(timestamp)
console.log(myDate.getFullYear())

console.log(`Year: ${now.getFullYear()}`)
console.log(`Month: ${now.getMonth()}`)
console.log(`Day of month: ${now.getDate()}`)
console.log(`Hour: ${now.getHours()}`)
console.log(`Minute: ${now.getMinutes()}`)
console.log(`Seconds: ${now.getSeconds()}`)


const date1 = new Date('January 3 2018 9:00:00');
const date2 = new Date('December 31 2017 9:00:00');

if(date1.getTime() > date2.getTime()){
    console.log(date1.toString());
} else {
    console.log(date2.toString());
}
