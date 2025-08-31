//primitive 
// 7 Types=>Boolean,null,undefined,Number,BigInt,String,Symbol
const number=100
//const Number=100.3
const isLoggedIn=false
const outsideTemp=null
let emailId;
const id=Symbol('123')
const anotherId=('123')
const bigNumber=2222233211111122333n
// console.log(id===anotherId);
// console.log(bigNumber);


//Reference (Non Primitive )
// Arrays,Object,Function
const heroes=(["Thor","Ironman","Hulk"])
let object={
    emailId:"Satyajit@gmail.com",
    age:22
}

const myFunction=function(){
    console.log("h wkv w v");
    
}
console.log(heroes);
console.log(object);
console.log(myFunction);
/*1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
       */

