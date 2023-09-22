// Escribe una función que tome un número (a) como argumento. Divida a en sus dígitos individuales y devuélvalos en una matriz. Sugerencia: es posible que desee cambiar el tipo de número para la división

const matriz=(z)=>{
    let array= z.toString();
    return array.split('').map((numeros)=>parseInt(numeros)); 

}
console.log(matriz(24));
console.log(matriz(2417));
console.log(matriz(987654321));

// const vinochimbo=3456;
// let numeros=vinochimbo.toString();
// const matriz=numeros.split('')
// // let array=vinochimbo.split('');
// console.log(matriz);