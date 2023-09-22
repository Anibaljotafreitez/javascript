// Escribe una función que tome una matriz (a) y un valor (n) como argumento. Devuelve el enésimo elemento de 'a'

const enensimNumber=(a,n)=>{
return a[n-1];
}
console.log(enensimNumber([1,2,3,4,5],3));
console.log(enensimNumber([10,9,8,7,6],5));
console.log(enensimNumber([7,2,1,6,3],1));