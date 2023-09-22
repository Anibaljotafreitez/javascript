// Escribe una función que tome una matriz (a) y un valor (b) como argumento. La función debería eliminar todos los elementos iguales a 'b' de la matriz. Devuelve la matriz filtrada.

const deleteElement=(a,b)=>{
    return a.filter((item)=>item===b?item.splice:item);
    // tambien se puede realeza asi: (item)=>item!==b;


}
console.log(deleteElement([1,2,3], 2));
console.log(deleteElement([1,2,'2'], '2'));
console.log(deleteElement([false,'2',1], false));
console.log(deleteElement([1,2,'2',1], 1));