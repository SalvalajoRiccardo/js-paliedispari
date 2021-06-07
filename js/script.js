// Palidroma: Chiedere all’utente di inserire una parola. Creare una funzione per capire se la parola inserita è palindroma


var parola = prompt("inserisci parola");

var parolaInversa = inverti(parola);


if(parola == parolaInversa){
    document.getElementById('pal').innerHTML = 'la parola è palindroma';
  } else {
    document.getElementById('pal').innerHTML ='la parola non è palindroma';
}


// Funzioni
function inverti(x) {
    var inv ='';
    for (var i = x.length - 1; i >= 0; i--) {
        var y = x[i]
        inv += y;
    }
    return inv;
}



