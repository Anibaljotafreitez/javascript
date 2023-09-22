// Escribe una función que tome dos matrices como argumentos. Fusione ambas matrices y elimine los valores duplicados. Ordene el resultado de la combinación en orden ascendente. Devuelve la matriz resultante

const futionMatriz=(arr,bar)=>{

return [...new Set(arr.concat(bar))].sort((x,y)=> x - y);
}
console.log(futionMatriz([1, 2, 3], [3, 4, 5]));
console.log(futionMatriz([-10, 22, 333, 42], [-11, 5, 22, 41, 42]));

