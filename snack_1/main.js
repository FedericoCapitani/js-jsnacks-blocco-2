/* SANCK 1
Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while. */
// esercizio con ciclo FOR
/* let somma = 0;

for(let i = 0; i < 5; i++){
    let numero_utente = Number(prompt('Inserisci un numero'));
    somma += numero_utente
}
console.log(`La somma è ${somma}`) */


// esercizio con ciclo while
let somma = 0, counter = 0;

while(counter < 5){
    let numero_utente = Number(prompt('Inserisci un numero'))
    somma += numero_utente;
    counter++;
}

console.log(`La somma è ${somma}`);

