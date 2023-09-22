// Escriba una función que tome argumentos en un número arbitrario de matrices. Debería devolver una matriz que contenga los valores de todas las matrices.

const everyArraysvalue=(...arr)=>{

return [].concat(...arr);
// return arr.flat();

}
console.log(everyArraysvalue([1, 2, 3], [4, 5, 6]));
console.log(everyArraysvalue(['a', 'b', 'c'], [4, 5, 6]));
console.log(everyArraysvalue([true, true], [1, 2], ['a', 'b']));