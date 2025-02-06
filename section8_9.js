/** 
 * Call, Apply, Bind
 * Objects
 */

//Call
var obj1 = {num:2};
var addToThisCall = function(a,b,c){
    return this.num + a + b + c;
}
console.log(addToThisCall.call(obj1,1,2,3)); //8

//Apply
var obj2 = {num:2};
var addToThisApply = function(a,b,c){
    return this.num + a + b + c;
}
var arr = [1,2,3];
console.log(addToThisApply.apply(obj2,arr)); //8

//Bind
var obj3 = {num:2};
var addToThisBind = function(a,b,c){
    return this.num + a + b + c;
}
var ref = addToThisBind.bind(obj3,1);
console.log(ref(2,3)); //8

//--------------------------- Objects ---------------------------
// Existen 2 formas de crear objetos en JS
// 1. Object keis
var objOne = {
    name: 'Andrea',
    age: 23,
    greet: function(){
        console.log('Hello');
    }
}
// 2. Constructor
var objTwo = new Object(
    {
    name : 'Andres',
    age : 26,
    greet : function(){
        console.log('Hello');
    }
    }
);

//Literal, se puede ver un objeto de esta forma:
console.log(objOne);
console.log(objTwo);

//Accesos, como acceder a una propiedad de un objeto
console.log(objOne.name);
console.log(objOne['name']);

//Agregar propiedades
objOne.lastName = 'Gomez';
console.log(objOne);
objTwo['lastName'] = 'Gomez';

//Eliminar propiedades
delete objOne.age;
console.log(objOne);
delete objTwo['age'];
console.log(objTwo);

//Existencia de una propiedad
console.log('name' in objOne);

//Iterar sobre un objeto
for(var key in objOne){
    console.log(key);
    console.log(objOne[key]);
}
//Referencia a un objeto
console.log('----------------- Reference to an Object ----------------------');
var objThree = {
    name: 'Andres',
    age: 26,
    greet: function(){
        console.log('Hello');
    }
}

var refObjThree = objThree;
console.log(refObjThree);
refObjThree.name = 'Marta';
console.log(refObjThree);
objThree.name = 'Andres';
console.log(refObjThree);

//Assign method
console.log('----------------- Assign Method ----------------------');
var objFour = {
    name: 'Felipe',
    age: 6,
    greet: function(){
        console.log('Hi');
    }
}
var assigned = Object.assign({},objFour);
console.log(assigned);
assigned.name = 'Andres';
console.log(assigned);
console.log(objFour);

//Spread operator
console.log('----------------- Spread Operator ----------------------');
var objFive = {
    name: 'Carmen',
    age: 69,
    greet: function(){
        console.log('Excuse me');
    }
}
var spreaded = {lastName:"Aleja",...objFive};
console.log(spreaded);
spreaded.name = 'Andres';
console.log(spreaded);
console.log(objFive);

//Copia profunda con JSON
console.log('----------------- Copy with JSON ----------------------');
var objSix = {
    name: 'Camilo',
    age: 23,
    greet: function(){
        console.log('Hello');
    }
}
var copied = JSON.parse(JSON.stringify(objSix));
console.log(copied);
copied.name = 'Andres';
console.log(copied);
console.log(objSix);