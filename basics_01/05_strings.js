const name="Satyajit"
const surname=" khatua"
// console.log(name+ surname+" anything i can add");
//console.log(`my name is ${name} and my surname is${surname}`)
const gameName=new String('satyajit,khatua,roy')
// console.log(gameName[0]);
// console.log(gameName.charAt(2));//check the position of index 2
// console.log(gameName.length);//length of the string
// console.log(gameName.toUpperCase());//all the letter should be caapital letter
// console.log(gameName.indexOf('t'));//position of the letter

const newString=gameName.substring(1,4)
// console.log(newString);
const anotherString=gameName.slice(-8,4)//slice is the method we can use index number from negative value 
// console.log(anotherString);
const stringOne="     Satyajit       "
console.log(stringOne);
console.log(stringOne.trim());//usually trim avoid spaces in between strings

const url="https://satyajitkhatua%20khatua.com"
console.log(url.replace('%20','-'));
console.log(url.includes('satya'));
console.log(gameName.split(','));//split in the number you given 




