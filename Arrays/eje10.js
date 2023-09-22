// Escribe una función que tome una serie de números como argumento. Debería devolver una matriz con los números ordenados en orden descendente.

const orderDesender=(arr)=>{
    return arr.sort((a,b)=>(b-a));
    
}
console.log(orderDesender([1,3,2]));
console.log(orderDesender([4,2,3,1]));
