// Escribe una función que tome un número (a) como argumento. Si a es un número entero (no tiene decimales), devuelve verdadero. De lo contrario, devuelve falso.

const enteros=(x)=>{
 
    return x===Math.trunc(x)?true:false;
}
console.log(enteros(17));
console.log(enteros(24.5));

// me costo mas que la verga este, no conocia ese Math