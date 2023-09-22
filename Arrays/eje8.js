// Escribe una función que tome una serie de números como argumento. Devuelve el número de valores negativos en la matriz.

const negativeNumber=(a)=>{
    // const negativo= a.filter((item)=>item<0?item:0)
    // return negativo.length;
return a.filter((item)=>item<0).length;
   
}
console.log(negativeNumber([1,-2,2,-4]));
console.log(negativeNumber([0,9,1]));
console.log(negativeNumber([4,-3,2,1,0]));