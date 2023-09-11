// Escribe una función que tome dos números (a y b) como argumentos. Si a es menor que b, divida a entre b. De lo contrario, multiplica ambos números. Devuelve el valor resultante



const multiplos=(a,b)=>{

return b>a?(a/b):a*b;
}
console.log(multiplos(10,100));
console.log(multiplos(90,45));
console.log(multiplos(8,20));
console.log(multiplos(2,0.5));