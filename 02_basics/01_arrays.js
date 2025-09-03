//file to run coode :=> node 02_basics/01_arrays.js
const myArr=[1,2,3,4,5,6]
const myArr1=["ironman","satyajit","anything"]//array's element can be string by the way
// console.log(myArr1);

// console.log(myArr[1]);
// const myArr2=new Array(1,2,2,2,2,2)
//const myArr2=new Array[1,2,2,2,2,2]//cannot do like this wrong statement

// console.log(myArr2);
//myArr.push(9)//adding any element in the array
// myArr.pop()//remove the last element from the array

//some diiffernces

// myArr.unshift( 3,4)//adding arrays,s element from left of the array
/*
myArr.unshift(9)
myArr.unshift(8)
myArr.unshift(7)*/
console.log(myArr);
//or
// console.log("A",myArr);

//shift=can eleminate starting element from the array
//myArr.shift()
// console.log(typeof(myArr.includes(4)));
// console.log(myArr.indexOf(4));
//join = make an array to string 

//how array.join works in the sence of comma and spaces and underscore
// const newArr=myArr.join()
// console.log(myArr.join(""));

// console.log(myArr.join("-"));

// console.log(myArr);

// console.log(newArr);
// console.log(typeof newArr);

//slice and splice

const myn1=myArr.slice(1,3)
console.log(myn1);

const myn2=myArr.splice(1,3)
 console.log(myArr);
console.log(myn2);




