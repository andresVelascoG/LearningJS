/**
 * for of/for in
 * Array methods
 */
// ----------------- For of/For in----------------------
let arr = [1,2,3,4,5];
for(let i of arr){
  console.log(i);
}
let obj = {
  name: 'Andres',
  age: 26
}
for(let i in obj){
  console.log(i);
}

// ----------------- Array Methods----------------------
console.log('----------------- Array Methods----------------------');
//Array
let myArray =[1,2,4,6,7,8]
console.log(myArray);
console.log(typeof myArray);
//Find
let myFind = myArray.find(a=>a>4);
console.log(myFind);

//Filter
let myFilter = myArray.filter(a=>a>4);
console.log(myFilter);

//Map
let myMap = myArray.map(a=>a*2);
console.log(myMap);

//Reduce
let myReduce = myArray.reduce((acc,curr)=>acc+curr,0);
console.log(myReduce);
console.log(myArray);
