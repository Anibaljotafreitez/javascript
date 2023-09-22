// Escribe una función que tome una serie de cadenas como argumento. Devuelve la cadena más larga.

const stringLarge=(str)=>{
   return str.sort((a,b)=>b.length-a.length)[0];
    
}   
console.log(stringLarge(['help', 'me']));
console.log(stringLarge(['I', 'need', 'candy']));
console.log(stringLarge(['mazinger','xmen','transformer','simpson']));