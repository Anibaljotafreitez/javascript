// Escribe una función que tome dos cadenas (a y b) como argumentos. Devuelve el número de veces que a ocurre en b.

const ocurrent=(a,b)=>{
    let acumulator=0;
    for(let i=0;i<b.length;i++){
        if(b[i]===a){
        acumulator++;
        }
      
    }
    return acumulator
//   return b.split(a).length-1; lo resuelven de esta manera
}


console.log(ocurrent('a','cuando pasa el temblor'));
console.log(ocurrent('z','tengo mis zapatos rotos'));
console.log(ocurrent('o','una mirada dice todo y dice nada'));