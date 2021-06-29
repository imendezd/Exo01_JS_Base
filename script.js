'use strict'
/*1) Détection d'une année bissextile
 ***********************************
Réaliser un algorithme qui permet de définir si une année donnée (via prompt) 
par l'utilisateur est bissextile ou non.

Règle  : Une année est bissextile si elle est divisible par 4, mais elle n'est pas
          divisible par 100. A l'exception des années qui sont divisibles par 400.
Exemple : Non bissextile : 1999, 2003, 2100
            Bissextile: 2004, 2080, 2000 */
const resultatIf = document.getElementById('result1');
const year = parseInt(prompt('Encoder une valeur numerique'));
            
if(isNaN(year)) {
     resultatIf.innerHTML = `Wrong value`;
}
else if (year%4===0 && year%100!==0 || year%400===0) {
    resultatIf.innerHTML = ` ${year} it's a leap-year!`;
}
else{
    resultatIf.innerHTML = `${year} it's NOT a leap-year!`;
}
