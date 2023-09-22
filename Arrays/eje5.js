// Escribe una función que tome una matriz (a) y un número (n) como argumentos. Debería devolver los últimos n elementos de a.

const lastItem=(a,n)=>{
    return a.slice(-n);
}
console.log(lastItem([1,2,3,4,5],2));
console.log(lastItem([1,2,3],6));
console.log(lastItem([1,2,3,4,5,6,7,8],3));