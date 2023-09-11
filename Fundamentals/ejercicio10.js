// Escribe una función que tome una cadena (a) como argumento. Elimine los últimos 3 caracteres de a. Devolver el resultado

const ultimateTre=(str)=>{
    return str.slice(0,-3);
}
console.log(ultimateTre('abcdfgh'));
console.log(ultimateTre('camaleon'));
console.log(ultimateTre('zona de promesas'));