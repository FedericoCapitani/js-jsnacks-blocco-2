/* Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti */
let somma = 0;

for(let i = 0; i < 5; i++){
    let numero_utente = Number(prompt('Inserisci un numero'));
    somma += numero_utente
}
console.log(`La somma è ${somma}`)