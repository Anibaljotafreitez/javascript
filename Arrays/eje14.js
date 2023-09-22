// Escribe una función que tome una matriz como argumento. Debería devolver verdadero si todos los elementos de la matriz son iguales. De lo contrario, debería devolver falso.

const elementSame=(verdad)=>{
return verdad.every((item)=>item===verdad[0]);
// return new Set(verdad).size === 1
}
console.log(elementSame([true, true, true, true]));
console.log(elementSame(['test', 'test', 'test']));
console.log(elementSame([1,1,1,2]));
console.log(elementSame(['10',10,10,10]));  