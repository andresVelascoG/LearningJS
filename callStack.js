/**
 * The call stack follow the pattern FIFO First In Firs Out
 * It says the way of how functions are executed, in which order, as JS only manages to use one thread
 */

//EXAMPLE

function multiply (num1,num2){
    return num1*num2;
}

function square (num){
    return multiply(num,num);
}

let result = square(4);
console.log("The square of 4 is: ",result)

/**
 * In this case the pile at the top level would be:
 * 
 * |            |
 * |            | 
 * |  multiply  |
 * |  square    |
 * --------------
 * 
 * So when multiply is resolved, then it goes to solve square (First In Firt Out)
 * This is because multiply was the last fucntion to get in the call stack
 */


/**
 * There is always a (anonymous) function in our JS callStack, when this function goes from the call stack
 * it represents that the program finished its execution
 * 
 * |             |
 * |             | 
 * |   multiply  |
 * |    square   |
 * | (anonymous) |
 * --------------
 */


/**
 * When an error happens it shows the callStack, at what line the program died (:O)
 * 
 */

//Ejemplo de una ensalada:
const cortar = (ingrediente) => {
    // Uncomment to see the error and learn about the callStack in a error
    // if (ingrediente == 'cebolla') throw new Error ('Error al cortar la cebolla');
    console.log('Cortar ' + ingrediente);
  }
  
  function mezclarIngredientes(n) {
    if (n <= 0) return;
  
    console.log('Mezclar #' + n);
    mezclarIngredientes(n - 1);
  }
  
  function comer() {
    console.log('Comer');
  }
  
  function hacerEnsaladaMixta() {
    cortar('tomate');
    cortar('lechuga');
    cortar('cebolla');
    mezclarIngredientes(5);
    comer();
  }
  
  hacerEnsaladaMixta();
