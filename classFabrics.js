// The clases is a template to create objects that defines the atributes of these objects and the methods that can execute.
//JS does not have abstract classes

//We should use classes when there is an important entity in the software  and should have a certain behavior and cohetion
//There is NO pultiple herency,
//The classes are 2 times fasters than the fabrics but the difference is minimal

//The name of a class should be a sustantive
//PascalCase
class Person{
    constructor(name){
        this.name=name;
    }

    greeting(){
        console.log(`Hello, my name is ${this.name}`);
    }
}

const andrew = new Person("andrew");


// The factories is a function that the objective is to return a new object
// In the functional programming there is common to use fabrics 
// The fabrics are also used in the tests
// The name of a fabric should be build or create.
// camelCase
const createPerson = name =>({
    name,
    greeting(){
        console.log(`Hello, my name is ${this.name}`);
    }
})

const carl = createPerson("carl");
