// Escribe una función que tome una cadena (a) y un número (n) como argumento. Devuelve el enésimo carácter de 'a'.

const enesimo=(s,n)=>{
    
return s.charAt(n-1);
}
console.log(enesimo('arepa',4));

// este lo hice asi pero revice y lo hacen con s[n-1]

let cadena='arepa';
console.log(cadena[4]);