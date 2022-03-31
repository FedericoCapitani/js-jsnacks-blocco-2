/* SNACK 2
Inserisci un numero, se è pari stampa il numero,
se è dispari stampa il numero successivo. */
let bool = true;

while (bool == true) {
    const number_user =Number(prompt('Inserisci un numero'));
    console.log(number_user)
    if(number_user != NaN){
        if(number_user % 2 == 0){
            console.log(number_user)
            bool  = false;
        } else if(number_user % 2 == 1) {
           console.log(number_user + 1)
            bool = false;
        }
    }
}