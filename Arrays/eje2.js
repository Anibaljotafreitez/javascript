// Escribe una función que tome una matriz (a) como argumento. Elimina los primeros 3 elementos de 'a'. Devolver el resultado

const treeFirst=(a)=>{
return a.splice(3);
}
console.log(treeFirst([1,2,3,4]));
console.log(treeFirst([5,4,3,2,1,0]));
console.log(treeFirst([99,1,1]));