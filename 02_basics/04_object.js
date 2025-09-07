//this is a singleton object
//const tinderUser=new Object()
 
//this is not a singleton object 
const tinderUser={}

tinderUser.id="123abc"
tinderUser.email="satyajit@gmail.com"
tinderUser.isLoggedIn=true

// console.log(tinderUser);

const userInput={
    name:"satyajit",
    fullname:{
        userFullName:{
            firstName:"satyajit",
            lastName:"Khatua"
        }
    }
}
// console.log(userInput.fullname.userFullName.lastName);
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj3={5:"a",6:"b"}

 // for combining object
 //type 1
// const obj4={obj1,obj2,obj3}

// console.log(obj4);

//type 2
// const obj4=Object.assign({},obj1,obj2,obj3)

// console.log(obj4);
//type 3
// const obj4={...obj1, ...obj2, ...obj3}
// console.log(obj4);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(tinderUser.hasOwnProperty('isLogged'));



