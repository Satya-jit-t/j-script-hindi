const marvel_heroes=["ironman","thor","hulk"]
const dc_heroes=["superman","superwomen","arrow"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][2]);

//differnce between concat and push

// const allHeroes=marvel_heroes.concat(dc_heroes)
// console.log(allHeroes);
// console.log(allHeroes[4]);
//spread operator(...)(only 3 dots)
// const allNewHerores=[...marvel_heroes,...dc_heroes]
// console.log(allNewHerores);
//merge array in one single array form array in between array 
//use (flat)
// const arr=[1,2,3,[3,3],[3,5],[5,6],[6,6]]
// const myArr=arr.flat(Infinity)
// console.log(myArr);

console.log(Array.isArray("Satyajit"))
console.log(Array.from("Satyajit"));
console.log(Array.from({name :"Satyajit"}));//important from interview perspective

const score1=100
const score2=200
console.log(Array.of(score1,score2));//also "of" have the same type of property as from


