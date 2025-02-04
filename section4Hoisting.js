//Funcionamiento normal:
var num1 = 5;
function Hi1(){
  console.log("Hoisting in Js");
}
console.log(num1);
console.log(Hi1);
Hi1()

//Hoisting de variables y funciones
console.log(Hi2);
console.log(num2);
Hi2()

var num2 = 8;
function Hi2(){
  console.log("Hoisting in Js 2");
}

//Arrow Hoisting (La funcion es tratada como una variable)
console.log(Hi3);
Hi3()

var Hi3 =()=>{
  console.log("Hoisting in Js 3");
}

//Error del hoisting donde no existe la variable:
console.log(num3)