//singleton

//objct literals
//const jsuser() cannot write like this 
//const jsuser(){} also  this type we cannot write

const mySym=Symbol("mykey")//use as Symbol


const jsuser={
name: "Satyajit",
"full name":"satyajit khatua",
age:18,
email:"situ.khatua2001@gmail.com",
state :"odisha",
isLoggedIn:true,
[mySym]:"key1"

}
// console.log(jsuser.name);//it is a way but its not the proper way
// //console.log(jsuser.full name);//its error
// console.log(jsuser["full name"]);//its a best way to execute in js

 
// console.log(jsuser["name"]);//this is the most proper way that u can use 
// console.log(typeof(jsuser[mySym]));


jsuser.email="satyajit@google.com"
// console.log(jsuser.email);
// Object.freeze(jsuser)//it is freeze the object value that we cannot change
// jsuser.email="satyajit.micosoft@gmail.com"
// console.log(jsuser.email);
// console.log(jsuser);

jsuser.greetings=function(){
    console.log("hello from js user");
    
}
jsuser.greetingTwo=function(){
    console.log(`hello from js user,${ this.name }` );
    
}

console.log(jsuser.greetings());
console.log(jsuser.greetingTwo());





