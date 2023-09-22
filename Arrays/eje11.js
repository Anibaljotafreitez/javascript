// Escribe una función que tome una serie de números como argumento. Debería devolver la suma de los números.

const sustractionTotality=(serie)=>{
    return serie.reduce((a,b)=>a+b);
}
console.log(sustractionTotality([10,100,40]));
console.log(sustractionTotality([10,100,1000,1]));
console.log(sustractionTotality([-50,0,50,200]));