/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';
let arrayVocali = []

// Dichiara la funzione qui.
function parole(){
    let vocali = 0;
    for(let i = 0; i < word.length; i++){
        if (word.charAt(i) == "a" || word.charAt(i) == "e" || word.charAt(i) == "i" || word.charAt(i) == "o" || word.charAt(i) == "u") {
            vocali += 1;
            arrayVocali.push(word[i])
          }

    }
    return vocali;
}

// Invoca la funzione qui e stampa il risultato in console




//Risultato atteso se si passa 'javascript': 3 (a, a, i)
console.log(parole(word), arrayVocali)