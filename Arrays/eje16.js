// Escribe una función que tome una serie de objetos como argumento. Ordene la matriz por propiedad b en orden ascendente. Devuelve la matriz ordenada

const orderMatriz=(arr)=>{
    return arr.sort((x,y)=>x.b-y.b);

}

console.log((orderMatriz([{a:1,b:2},{a:5,b:4}])));
console.log((orderMatriz([{a:2,b:10},{a:5,b:4}])));
console.log((orderMatriz([{a:1,b:7},{a:2,b:1}])));