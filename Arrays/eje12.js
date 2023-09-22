// Escribe una función que tome una serie de números como argumento. Debería devolver el promedio de los números.

const nemberPromedium=(number)=>{
   let promedium= number.reduce((a,b)=>a+b,0)
    return promedium/number.length
}
console.log(nemberPromedium([10,100,40]));
console.log(nemberPromedium([10,100,1000]));
console.log(nemberPromedium([-50,0,50,200]));
