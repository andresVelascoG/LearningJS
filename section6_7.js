/**
 * Ejecutar en un navegador!!
 * 
 * Closure
 * this
 */

// ------------------------- Closure ---------------------------------------------

//El closure es el mecanismo que una funcion usa para acceder a scope externo
//Este es creado al momento de la creacion de una funcion

function myFunction(){
  let x = "Holaa";
  //Al permitir que hi tome el x de afuera e imprima el holaa, eso es el closure
  function hi(){
    console.log(x);
  }
  hi()
}

myFunction();


// -------------------------------------- This -----------------------------------------------
// Default binding
console.log("---------- Default Binding -----------");
function printName(){
  console.log(this);
  console.log(this.name);
}
var name = "Andres";
printName();

// Implicit binding
console.log("---------- Implicit Binding -----------");
var company ={
  compaName : "Google",
  printCompaName: function(){
    console.log(this);
    console.log(this.compaName);
  }
}

var compaName = "Globant"
company.printCompaName();

// Explicit binding
console.log("---------- Explicit Binding -----------");
var companyE ={
  compaEName:'Meta',
  printCompaName: function(){
    console.log(this);
    console.log(this.compaEName);
  }
};
var compaEName = 'Pragma';
var ref = companyE.printCompaName;

ref()

// Explicit with new
console.log("---------- Explicit With new Binding -----------");
let Cartoon = function(name, character){
  this.name = name;
  this.character = character;
  this.log= function(){
    console.log(this.name + ' is a '+this.character);
  }
}
let tom = new Cartoon('Tom', 'Cat');
let jerry = new Cartoon('Jerry', 'Mouse');

console.log(tom);
console.log(jerry);

tom.log();
jerry.log();

// Arrow Function
console.log("---------- this with Arrow Function -----------");
function outer(){
  console.log(this);
  var inner = ()=>{
    console.log(this);
  }
  inner();
}
new outer();