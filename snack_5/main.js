/* SNACK 5 (Bonus)
Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro. */

let primo_array = [1, 1, 1, 1, 1, 1, 1, 1,1]
let secondo_array = [1, 1, 1, 1, 1]

console.log(`Elementi iniziale primo array: ${primo_array.length}`)
console.log(`Elementi iniziale secondo array: ${secondo_array.length}`)

while(primo_array.length != secondo_array.length){
    secondo_array.push(1)
    console.log('aggiunto elemento ad array con meno elementi');
}
console.log(`Elementi finale primo array: ${primo_array.length}`)
console.log(`Elementifinale secondo array: ${secondo_array.length}`)
