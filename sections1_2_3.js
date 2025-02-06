/**
 * Tipos de tados (Primitivos no primitivos)
 * Operadores
 * use Strict
 */

//-------------------------------- Seccion 1 ----------------------------------------
// Manejo de tipos de datos en JavaScript

//Datos primitivos
console.log('----------------- Primitives ----------------------');

//String
const nameFile = "This is an string";
console.log(typeof nameFile);
//number
const myNumber = 84234;
console.log(typeof myNumber);
//BigInt
const myBigNumber = 564756845678n;
console.log(typeof myBigNumber);
const myBoolean = true;
console.log(typeof myBoolean);
//undefined
let myUndefined;
console.log(typeof myUndefined);
//null
//Cabe resaltar que null es tratado como un Objeto
let myNull = null;
console.log(typeof myNull);
//Symbol
let mySymbol1 =Symbol("Sym");
let mySymbol2 =Symbol("Sym");
console.log(typeof mySymbol1);

//Los simbolos son unicos asi tengan la misma descripcion:
console.log(mySymbol1 === mySymbol2);

const myarray2=[]
console.log(typeof myarray2)
//Datos No-primitivos
console.log('----------------- Non Primitives ----------------------');
//Object
const myObject={
  name: 'Andres',
  age: 7,
  admin: true,
  getName: function() {
    //Es importante tener encuenta el usar el litral function y no ()=>, dado que la segunda no cuenta con el contexto padre y el this no tendra contexto
    return this.name
  }
}
console.log(typeof myObject);
console.log('User Name: ', myObject.getName());

console.log(myObject.hasOwnProperty('getName'));

//Array
let myArray =[1,2,4,6,7,8]
console.log(typeof myArray);
myArray.push(130);
console.log(myArray)
myArray.map(a=>console.log(a))

//-------------------------------- Seccion 2 ----------------------------------------
//Operators
//Unitarios:
console.log('----------------- Operadores Unitarios----------------------');
//Operador +
let a = +'3';
console.log(typeof a);

//Operador - 
let b = -"-4";
console.log(typeof b);
console.log(b)

//Operador delete
let userDel = {property1: "1", property2: "2"};
console.log("Tiene la propiedad property1? ",userDel.hasOwnProperty('property1'));
delete userDel["property1"];
console.log("Sigue teniendo la propiedad property1? ",userDel.hasOwnProperty('property1'));

//Operador void
void function iife(){
  console.log("Me ejecute")
}();

//Operador typeof
console.log(typeof 2);

console.log('----------------- Operadores Aritmeticos----------------------');
//Adition (+)
console.log("---- Suma ----")
console.log(2+3);
console.log("Ho"+"la")
console.log("4"+"5")
console.log(4+"5")
console.log("4"+5)

//Substraction (-)
console.log("------ resta ------")
console.log(2-3);
console.log("Ho"-"la")
console.log("4"-"5")
console.log(4-"5")
console.log("4"-5)

//Multiplication (*)
console.log(5*5);
//Divisional (/)
console.log(25/5);
//Modulus (%)
console.log(10 % 3);
console.log(10 % 2);

console.log('----------------- Operadores Relacionales----------------------');
//Greater than
console.log(10>5);
//Less than
console.log(10<5);
//Greater than or equal to
console.log(10>=5);
console.log(10>=10);
//Less than or equal to
console.log(10<=5);
console.log(10<=10);
//In
console.log("----- In --------")
let userIn = {property1: "1", property2: "2"};
console.log('property1' in userIn);
//Instance of
console.log("----- Instance of --------")
function Car (make, model, year){
  this.make = make;
  this.model = model;
}
const auto = new Car("Ford","Figo");
console.log(auto instanceof Car)

console.log('----------------- Operadores Logicos ----------------------');
//AND
console.log(true && true && false && true);
console.log(true && true)
//OR
console.log(true || true || false || true);
console.log(false || false)

console.log('----------------- Operadores Bitwise Shift ----------------------');
//Left Shift
console.log(5<<2);
//Right Shift
console.log(5>>2);

console.log('----------------- Operador Ternario ----------------------');
true ? console.log("Entro en el true") : console.log("Entro en el false")

//-------------------------------- Seccion 3 ----------------------------------------
void function StrictFunction (){
  "use strict"
  foo = 17;
  console.log(foo)
}