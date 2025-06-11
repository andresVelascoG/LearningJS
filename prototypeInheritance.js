const cheff = {
  type: 'Colombian food',
  cook: function (dish){
    console.log('cooking ',dish);
  }
}

const andres = {
  name: 'Andres',
  age: 23,
  career: 'Developer'
}

//To connect 2 objects:
//hidden property and it shouldn't be used
andres.__proto__ = cheff;

//Also there is a function
/**
 * req: object to connect, prototype to connect
 */
Object.setPrototypeOf(andres,cheff);

console.log(andres.name);
console.log(andres.age);
console.log(andres.cook('Sancocho'));


// To know what is the prototype of a object:
console.log(andres.__proto__=== cheff);

//It can be done in the other way this method says that if the object appears in ANY place of the prototype chain of the object:
console.log(cheff.isPrototypeOf(andres));
console.log(Object.prototype.isPrototypeOf(andres));

//There is a way to create a object with the desired prototype
const person ={
  greeting: function(){
    console.log("Hello");
  }
}
const isabella = Object.create(person);

//