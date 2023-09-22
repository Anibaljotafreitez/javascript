// Escribe una función que tome una matriz (a) como argumento. Extraiga los últimos 3 elementos de 'a'. Devuelve la matriz resultante

const treeLast=(a)=>{
return a.slice(-3);
}
console.log(treeLast([5,4,3,2,1,0]));
console.log(treeLast([99,1,1]));
console.log(treeLast([1,2,3,4]));