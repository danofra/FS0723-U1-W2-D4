/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const area = function (l1, l2) {
  return l1 * l2;
};
const areaRett = area(10, 4);
console.log(areaRett);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazySum = function (l1, l2) {
  if (l1 !== l2) {
    return l1 + l2;
  } else {
    return (l1 + l2) * 3;
  }
};
const pazzaSomma = crazySum(10, 3);
console.log(pazzaSomma);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazyDiff = function (l1, l2 = 19) {
  if (l1 < l2) {
    return l1 - l2;
  } else {
    return (l1 - l2) * l2;
  }
};
const pazzaSottrazione = crazyDiff(2);
console.log(pazzaSottrazione);
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const boundary = function (n) {
  if ((n > 20 && n <= 100) || n === 400) {
    return true;
  } else {
    return false;
  }
};
const boundaryLog = boundary(1);
console.log(boundaryLog);
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const stringa = "Oggi abbiamo lavorato tanto";
const nuovaParola = "EPICODE";
const epify = function (stringa) {
  let prl = nuovaParola + " , " + stringa;
  return prl;
};
console.log(epify(stringa));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const check3and7 = function (numero) {
  if (numero > 0) {
    if (numero % 3 === 0 || numero % 7 === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};
let risultato = check3and7(41);
console.log(risultato);

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const reverseString = function (parola) {
  const dividere = parola.split("").reverse().join("");
  return dividere;
};
console.log(reverseString("EPICODE"));
/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const upperFirst = function (inserisciStringa) {
  return inserisciStringa
    .split(" ")
    .map((parola) => parola[0].toUpperCase() + parola.slice(1))
    .join(" ");
};
console.log(upperFirst("Ciao sono Liborio e ho 25 anni"));
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const cutString = function (parola) {
  const lunghezzaStringa = cutString.lenght;
  const nuova = parola[(0, lunghezzaStringa)].splice();
  return nuova;
};
console.log(cutString("EPICODE"));
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
