// EXAMINE THE DOCUMENT OBJECT
console.dir(document)

document.title="Changed"
let paragraph = document.getElementById("paragraph");

//The innerText takes in count the style while the textContent doesn't.
//The text Content has Andres while the innerText do not have it.
console.log("I'm the textContent: ",paragraph.textContent);
console.log("I'm the innerText: ",paragraph.innerText);
