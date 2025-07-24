// ********************************************DATES******************************************************
 
let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

let myCreatedDate = new Date("2023-01-14")
// console.log(myCreatedDate.toLocaleString());

let myTimestamp = Date.now()

// console.log(myTimestamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now() / 1000));

let newDates = new Date()
console.log(newDates);
console.log(newDates.getMonth() + 1);
console.log(newDates.getDay());

// `${newDates.getDay()} and the timee is`
newDates.toLocaleString('default', {
    weekday: 'long',
})