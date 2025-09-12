function sayMyName(){
    console.log("s");
    console.log("a");
    console.log("t");
    console.log("t");
    console.log("u");
    
}
//this is call
//sayMyName()
//this is the reference
//sayMyName//having no output

// function addTwoNumber(number1,number2) {
//     console.log(number1+number2);
// //number 1 and number 2 are parameter    
    
//}
// addTwoNumber(3,9)//3,9 are arguments

function addTwoNumber(number1,number2) {
    // result=(number1+number2);
    // return result;
    return number1+number2
}
// const result=addTwoNumber(3,10)
// console.log("result:",result);
// function logInUser(user){
//     if (user===undefined) {
//         console.log("enter a user name");
//         return
//     }
//     return `${user} is just logged In`
// }

//or
function logInUser(user){
    if (!user) {
        console.log("enter a user name");
        return
    }
    return `${user} is just logged In`
}
// console.log(logInUser("satyajit"));

// function calculateCartPrice(price1){
//     return price1;
// }
// console.log(calculateCartPrice(2))
function calculateCartPrice(...price1){//hear if we write (val1,val2,...price1)
//the output is skipping the first two value like (200,199)
    return price1;
}
console.log(calculateCartPrice(200,400,200,199));

const user={
    name:"Satyajit ",
    cartPrice:200
}
function handleMyObject(anyObject){
    console.log(`userName Is ${anyObject.name} and the CartPrice is ${anyObject.cartPrice}
    `);
    }
   // handleMyObject(user)
    //important to Remember 
    //if the value of the any object like name to names or any chenges it tends to undefined..

//another method
handleMyObject(
    {
        name:"sam",
        cartPrice:333
    }
)
const myArray=[122,22,3334,5454,567]
function returnSecondValue(getArray) {
    return getArray
}
console.log(returnSecondValue(myArray));
