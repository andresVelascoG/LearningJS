//Set time out, is a function that will be run after a certain time

console.log('My first execution');

let timeoutID= setTimeout(()=>{
    console.log("Hello, I'm the set time out")
},1000);

//the setTimeout recieves a function and a time
function saySomething (){
    console.log('Im saying someting');
}

setTimeout(saySomething,1500);

// There is a way to cancel the timeout using clearTimeout:

let timeoutIDtoCancel= setTimeout(()=>{
    console.log("Hello, I'm the set time out, but cancelled")
},2000);

clearTimeout(timeoutIDtoCancel)


// Set Interval will keep executin the code for a interval

let intervalId = setInterval(saySomething,3000);

setTimeout(()=>{clearInterval(intervalId)}, 12000);
