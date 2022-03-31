let somma = 0, counter = 0;

while(counter < 5){
    let numero_utente = Number(prompt('Inserisci un numero'))
    somma += numero_utente;
    counter++;
}

console.log(`La somma è ${somma}`);

