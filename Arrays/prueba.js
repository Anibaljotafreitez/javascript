// operardor REST: Encapsula los valores de las estructuras (array y objetos), cuando se trata de un array y una funcion devuelve los valores en un array, para un objeto devolvera un objeto con los valores determinados.

let myArray=['lars','jason','james','kirt'];

const [batery,bass,...losotros]=myArray;
console.log(batery)
console.log(losotros);

let pilot={
    ayrton:'senna',
    michael:'shumager',
    jonny:'cecotto',
    pastor:'maldonado',
}

const {pastor,...otros}=pilot;
console.log(pastor)
console.log(otros)

michael.pilot='anibal';
console.log(pilot);
 