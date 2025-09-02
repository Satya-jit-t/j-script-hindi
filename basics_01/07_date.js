//node basics_01/07_date.js
//Dates
let myDate=new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toISOString());


// console.log(myDate);

 let myCreateDate=new Date(2025,4,4)
// let myCreateDate=new Date(2025,4,4,4,5)
// let myCreateDate=new Date("2025-02-03")
// let myCreateDate= new Date("01-04-2025")
// console.log(myCreateDate.toLocaleString());

// console.log(myCreateDate.toDateString());
// let myDateStamp=Date.now()
let myDateStamp=Date.apply()
// console.log(myDateStamp);

// console.log(myCreateDate.getDate());
// console.log(myCreateDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday:"narrow",
    
})
console.log(newDate);


