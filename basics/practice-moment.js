const now = moment()
console.log(now.toString())
// now.minute(1);
// console.log(now.toString())

//console.log(now.minute());
now.subtract(1, 'week').subtract(20, 'days');
//November 3rd, 2003
console.log(now.format('MMMM Do, YYYY'));
console.log(now.fromNow());
const nowTimestamp = now.valueOf();
console.log(nowTimestamp);
console.log(moment(nowTimestamp).toString());


const bday = moment();
bday.month(6).date(17).year(1991);
console.log(bday.format('MMM D, YYYY'))