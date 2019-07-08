// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire
// un numero, se è dispari inseriscilo nell’array

// array vuoto
var numdisp = [];
// variabili
var mesg, numdisp, num;
// richiesta numeri utente
for (var i = 0; i < 6; i++) {
  num = parseInt(prompt("scrivi un numero"));
  console.log(num);
  // controllo se dispari
  if ((num % 2) != 0) {
    numdisp.push(num);
    console.log(numdisp);
    mesg = "i numeri dispari sono: " + numdisp;

  }
}
// pubblicazione in pagina del risultato
document.getElementById('my_id').innerHTML = mesg;
