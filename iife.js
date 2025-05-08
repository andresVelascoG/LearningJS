//The IIFE - Immediately Invoked Function Expressions

/**
 * This helps you to invoke a functions at the same time it is getting declared
 * This is usually used with annonymous functions, so they do not have name
 */

function doSomething(){
    console.log('I did something');
}

var doSomethingElse = function(){
    console.log('I did something else');
};

//The above functions are the normal ones and need to be called as functions
console.log(1);
doSomething;
console.log(2);
doSomething();

console.log(3);
doSomethingElse;
console.log(4);
doSomethingElse();


// Now transform these in to IIFE functions
console.log(5);
(function doSomethingAgain(){
    console.log("I'm doing something Again");
    return true;
})();

console.log(6);
var doSomethingElseAgain = (function(nm){
    console.log('I did something else again');
    return "Hellooo "+nm;
})("Andres");

console.log(7);
doSomethingElseAgain;
console.log(8);
console.log(doSomethingElseAgain);
console.log(9);
doSomethingElseAgain();
