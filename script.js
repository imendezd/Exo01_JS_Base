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
const year = parseInt(prompt('Encoder une année'));
            
if(isNaN(year)) {
     resultatIf.innerHTML = `Wrong value`;
}
else if (year%4===0 && year%100!==0 || year%400===0) {
    resultatIf.innerHTML = ` ${year} it's a leap-year!`;
}
else{
    resultatIf.innerHTML = `${year} it's NOT a leap-year!`;
}
/* 2) Réaliser un programme de cotation d'un élève
 ***********************************************
L'utilisateur encode une cotation de 0 jusqu'à 20.
Le programme lui indique le grade correspondant : 
   • 20    : Excellent
   • 17-19 : Très bien
   • 13-16 : Bien
   • 10-12 : Suffisant
   • 8-9   : Insuffisant
   • 0-7   : Échec
   • Gérer les erreurs de saisie*/

   const result2 = document.getElementById('result2');
   const note = parseInt(prompt('Encoder une valeur numerique (0-20)'));
   switch (note) {
    case 20: 
        result2.innerHTML = 'Excellent'; 
        break;
    case 19:
    case 18:
    case 17:
        result2.innerHTML = 'Très bien'; 
        break;
    case 16:
    case 15:
    case 14:
    case 13:
    case 11:
    case 10:
        result2.innerHTML = 'Suffisant'; 
        break;
    case 9:
    case 8: 
        result2.innerHTML = 'Insuffisant'; 
        break;
    case 7:
    case 6:
    case 5:
    case 4:
    case 3:
    case 2:
    case 1:
    case 0:
        result2.innerHTML = 'Échec'; 
        break;
    default: 
        if(isNaN(note)) 
            result2.innerHTML = `The value is not a number`; 
        else 
            result2.innerHTML = `The value is out of range!`; 
        break;
}

   /*3) Réaliser un programme de gestion de date
 *******************************************
L'utilisateur encode une date au format "DD-MM-YYYY".
Vérifier si la date est valide et ensuite obtenir le jour de la semaine. */
const result3 = document.getElementById('result3');
const date = prompt('Encoder une date (DD-MM-YYYY)');

result3.innerHTML = `${date} is valid. It's ${dayOfTheWeek}`; 