function showIntro(age,state){
  return `${this.name} ${age} ${state}` 
} 
var person1={ name:"ravi" } 
console.log(showIntro.call(person1,[24,'Bihar']))
console.log(showIntro.apply(person1,24,'Bihar'))