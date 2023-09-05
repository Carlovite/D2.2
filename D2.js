/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/**/

let intero1 = 3;
let intero2 = 5;
if (intero1 === intero2) {
  console.log("I due numeri interi sono uguali");
} else if (intero1 > intero2) {
  console.log("il numero più grande è ", intero1);
} else {
  console.log("il numero più grande è ", intero2);
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

let intero3;
intero3 = intero1;
if (intero3 != 5) {
  console.log("not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

if (intero2 % 5 === 0) {
  console.log("divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

if (intero1 === 8 || intero2 === 8) {
  console.log("uno dei due numeri è 8");
} else if (intero1 - intero2 === 8 || intero1 + intero2 === 8) {
  console.log("La somma o la sottrazione dei due numeri è 8");
} else {
  console.log("condizione non verificata");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/*let carrello;
let shipment;
let totalShoppingCart;

carrello = 200;
if (carrello > 50) {
  shipment = 0;
} else {
  shipment = 10;
}

totalShoppingCart = carrello + shipment;

console.log(totalShoppingCart);

SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

let carrello;
carrello = 300;
let carrelloFinal = carrello * 0.2;
let shipment;
let totalShoppingCart;

if (carrelloFinal > 50) {
  shipment = 0;
} else {
  shipment = 10;
}

totalShoppingCart = carrelloFinal + shipment;

console.log(totalShoppingCart);

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

// let uno = 54;
// let due = 66;
// let tre = 4;

// if(uno > due && uno > tre &&)

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
let variabile;
variabile = 0;
if (variabile / 1 === variabile) {
  console.log("variabile è un numero");
} else {
  console.log("variabile non è un numero");
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let numero1 = 356;
if (numero1 % 2 === 0) {
  console.log("Il numero è pari");
} else {
  console.log("Il numero è dispari");
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
 */

let val = 3;
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}

// let val = 3;
// if (val < 10) {
//   console.log("Meno di 10");
// } else if (val < 5) {
//   console.log("Meno di 5");
// } else {
//   console.log("Uguale a 10 o maggiore");
// }

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};
me.city = "Toronto";
console.log(me);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName;
console.log(me);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
me.skills.pop();
console.log(me);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
let vettore = [];
console.log(vettore);
vettore.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(vettore);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
vettore[9] = 100;
console.log(vettore);
/* SCRIVI QUI LA TUA RISPOSTA */
