/*Descrizione:
Un alert() espone 5 numeri generati casualmente.
Da lì parte un timer di 30 secondi.
Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che 
ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali 
dei numeri da indovinare sono stati individuati.
*/

//PSEUDO CODICE:
document.addEventListener("DOMContentLoaded", function () {

    var numsRandomPc = document.querySelector(".nums-random-pc");
    var numsRandomUser = document.querySelector(".nums-random-user");
    var result = document.querySelector(".result");

    //Generare numeri randomici all'interno di un alert, con un while o con un for;
    //Ma prima mi creerei una funzione che mi crea numeri randomici:

    function numRandom() {
        return Math.floor(Math.random() * 100);
        console.log(numRandom);
    }

    var arrayNumsPc = [];

    while (arrayNumsPc.length < 5) {
        arrayNumsPc.push(numRandom());
    }
    alert(arrayNumsPc);
    alert("Mi raccomando, cerca di ricordarli perchè poi te li richiederò!");

    //oppure con un for
    /*
        for(var x = 0; x < 5; x++) {
            arrayNumsPc.push(numRandom());
        }
        alert(arrayNumsPc); 
    */

    //Ora devo fare in modo da crearmi un Timer. Dunque mi fisso una variabile
    // con il numero di secondi scelti e proseguo con un "setInterval":

    var numSecondi = 3;

    var arrayNumsUser = [];
    var arrayNumsUserTrue = [];
    var arrayNumsUserFalse = [];

    var timer = setInterval(function () {
        numsRandomPc.innerHTML = numSecondi;
        numSecondi--;
        if (numSecondi < 0) {

            clearInterval(timer);

            while (arrayNumsUser.length < 5) {

                var numsUser = parseInt(prompt("Dai provaci...inseriscili uno alla volta e premi OK!"));
                arrayNumsUser.push(numsUser);

                if (arrayNumsPc.includes(numsUser)) {
                    arrayNumsUserTrue.push(numsUser);
                } else {
                    arrayNumsUserFalse.push(numsUser);
                }
                numsRandomPc.innerHTML = "Numeri random Pc: " + arrayNumsPc;
                numsRandomUser.innerHTML = "Numeri Utente: " + arrayNumsUser;
                result.innerHTML = "Te ne ricordavi solamente: " + arrayNumsUserTrue.length + ", e sono: " + arrayNumsUserTrue;
            }
        }
    }, 1000);

})