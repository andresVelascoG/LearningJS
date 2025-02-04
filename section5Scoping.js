//con var podemos acceder desde el scope global
//Con let y const no podemos acceder desde el scope global

console.log(x);
var x=4;

var mutable = 405;
console.log("El valor de mutable es: ",mutable);
var mutable = "Me reasigne"
console.log("El valor de mutable es: ",mutable);


if(true){
  let y =10;
  var h = 89
  console.log("soy y: ",y);
  console.log("soy h: ",h);
}
//La h se imprime mientras que la y no porque var no respeta el scope del bloque mientras que let si
console.log(h)
console.log(y)
