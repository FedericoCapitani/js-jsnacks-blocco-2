/* SNACK 3
Generatore di “nomi cognomi” casuali: il Grande Gatsby ha una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome. */

const nomi = ['Mario ', 'Sara ', 'Luca ', 'Laura ', 'Marco ']
const cognomi = ['Rossi', 'Manca', 'Asuni', 'Piras', 'Vacca']
let lista_falsa = []

const numero_lista_falsa = parseInt(prompt('Quanti invitati deve avere la lista?'))

for (let i = 0; i < numero_lista_falsa; i++){
    let a = Math.floor(Math.random() * nomi.length)
    let b = Math.floor(Math.random() * cognomi.length)
    let element_lista_falsa = nomi[a] + cognomi[b]
    lista_falsa[i] = element_lista_falsa
}

console.log(lista_falsa)