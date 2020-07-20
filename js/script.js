//
// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all'utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: (da fare solo se funziona tutto il resto)
// all'inizio il software richiede anche una difficoltà all'utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 =>  tra 1 e 80
// con difficoltà 2 => tra 1 e 50


// 16 Numeri generati da pc tra 1 e 100 non duplicati
var pcNumbers = [];

while (pcNumbers.length < 16) {
  var pcNumber = random(1, 100);
  if (pcNumbers.includes(pcNumber) == false) {
    pcNumbers.push(pcNumber)
  }
}

//Chiedere all'utente di inserire un numero alla volta compreso tra 1 e 100
var userNumbers = [];
var i = 0
while (userNumbers.length < 84 && check(userNumber, pcNumbers) != true) {
   var userNumber = parseInt(prompt("Inserisci un numero da 1 a 100"));
   if (check(userNumber, pcNumbers)) {
   alert("Hai perso, il tuo punteggio è: " + (userNumbers.length));
 } else if (userNumbers.includes(userNumber) == false && userNumber >= 1 && userNumber <= 100) {
   userNumbers.push(userNumber);
 } else if (userNumbers.includes(userNumber) == true){
   alert('Hai già inserito questo numero');
 } else if (pcNumbers.length == 100){
   alert('Congratulazioni');
 } else if (userNumber <1 || userNumber >100) {
   alert('Attenzione: il numero inserito deve essere compreso tra 1 e 100');
 }
  i++;
}

console.log(pcNumbers);
console.log(userNumbers);


//Funzioni

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function check(num, array) {
  var control = false;
  for (var i = 0; i < array.length; i++) {
    if (num == array[i]) {
      control = true;
    }
  }
  return control
}
