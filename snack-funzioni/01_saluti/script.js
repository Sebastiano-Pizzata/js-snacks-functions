/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.
function string(){
    let nome = userName;
    return nome
}

// Invoca la funzione qui e stampa il risultato in console
let stringName = string();
console.log(`Ciao ${stringName}`)


//Risultato atteso se si passa 'Mario': // ciao Mario