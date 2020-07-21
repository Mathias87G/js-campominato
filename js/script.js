// //
// // Il computer deve generare 16 numeri casuali tra 1 e 100.
// // I numeri non possono essere duplicati
// // In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// // L’utente non può inserire più volte lo stesso numero.
// // Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all'utente un altro numero.
// // La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// // Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// // BONUS: (da fare solo se funziona tutto il resto)
// // all'inizio il software richiede anche una difficoltà all'utente che cambia il range di numeri casuali:
// // con difficoltà 0 => tra 1 e 100
// // con difficoltà 1 =>  tra 1 e 80
// // con difficoltà 2 => tra 1 e 50
//
//


// BONUS
do {
  var difficulty = parseInt(prompt('Scegli la tua difficoltà: 0 = FACILE, 1 = MEDIO, 2 = DIFFICILE'));
}
while (difficulty != 0 && difficulty != 1 && difficulty != 2){
}
// impostazioni variabili difficoltà
switch(difficulty){
  case 0:
  var max = 100;
  break;
  case 1:
  var max = 80;
  break;
  case 2:
  var max = 50;
  break;
}
// array di numeri generati da pc
var bombz = [];

while(bombz.length < 16){
  var numero = random(1, max);
  if(!search(bombz, numero)){
    bombz.push(numero);
  }
}

console.log(bombz);

// numeri inseriti da utente
var possibilita = max - bombz.length;
var numeri = [];
var number;
var found = false;

while (numeri.length < possibilita && found == false){
  number = parseInt(prompt('Inserisci un numero da 1 a ' + max));

// controlli numero da 1 a 100
  while(!(number > 0 && number <= max)){
   number = parseInt(prompt('Attenzione! devi inserire un numero da 1 a ' + max));
  }

// controllare che il numero non sia un bomba (I bomboni non mancano mai!)
  if (search(bombz, number)){
    found = true;
  } else if (!search(numeri, number)){
    numeri.push(number);
  } else {
    alert('Attenzione, numero già presente');
  }
}
// Vittoria o sconfitta con relativo punteggio
if (!(found)){
  alert('Hai vinto! Congratulazioni!');
} else {
  alert('Hai perso, il tuo punteggio è: ' + numeri.length);
}

console.log(numeri);

// Funzioni

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)  + min);
}

function search(arr, num){
  var i = 0;
  while (i < arr.length){
    if (num == arr[i]){
      return true;
    }
    i++;
  }
  return false;
}
