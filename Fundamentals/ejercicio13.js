// Escribe una función que tome dos cadenas (a y b) como argumentos. Si a contiene b, agregue b al comienzo de a. Si no, añádelo al final. Devolver la concatenación

const concatenation=(a,b)=>{

return a.includes(b)?b+a:a+b;
}

console.log(concatenation('lips', 's'));
console.log(concatenation('Java', 'script'));
console.log(concatenation('cheese', 'cake'));
console.log(concatenation(' think, therefore I am', 'I'));