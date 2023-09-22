// Escribe una función que tome una serie de cadenas como argumento. Ordene los elementos de la matriz alfabéticamente. Devuelve el resultado.

const orderAlphabetic=(arr)=>{
    return arr.sort((a,b)=>a-b);

}
console.log(orderAlphabetic(['b', 'c', 'd', 'a']));
console.log(orderAlphabetic(['z', 'c', 'd', 'a', 'y', 'a', 'w']));
console.log(orderAlphabetic([8,3,17,24]));