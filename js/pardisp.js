// Pari e Dispari: L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
// Sommiamo i due numeri. 
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

var parDis = prompt('scegli se pari o dispari').toLocaleLowerCase();
if (parDis != 'pari' && parDis != 'dispari') {
    alert('devi inserire pari o dispari, riprova');
}

var numUtente = parseInt(prompt("inserisci un numero da 1 a 5"));

if (isNaN(numUtente)) {
    alert('devi inserire un numero da 1 a 5, riprova')
} else if (numUtente < 1 || numUtente > 5) {
    alert('devi inserire un numero da 1 a 5, riprova')
} 

var numPC =  Math.floor(RandomPC(1,5));

var somma = numPC + numUtente;

var risultato = pariDispari(somma);

if (risultato == parDis) {
    document.getElementById('pd').innerHTML ='hai vinto';
} else {
    document.getElementById('pd').innerHTML ='hai perso';
}


// funzioni
function RandomPC(min, max) {
    return Math.random() * (max - min) + min;
}


var ris = 0
function pariDispari(y) {
    if (y % 2 == 0) {
        ris = 'pari'
    } else {
        ris = 'dispari'
    }
    return ris
}