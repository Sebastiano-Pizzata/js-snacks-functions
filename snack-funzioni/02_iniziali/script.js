/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];
const nomi = [];

// Dichiara la funzione qui.
function array(){
    
    for(let i = 0; i < names.length; i++ ){
        nomi.push(names[i].charAt(0)) 
    }
    return nomi
}

// Invoca la funzione qui e stampa il risultato in console
 array();



//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
console.log(nomi)