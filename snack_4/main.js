/* SNACK 4
Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari */
const numeri_interi = [3, 7, 19, 45, 21, 34, 57, 99, 83, 31]
let somma = 0;

for(let i = 0; i < numeri_interi.length; i++){
    if(i % 2 == 0){
        somma += numeri_interi[i];
    }
}
console.log(`La somma è: ${somma}`);