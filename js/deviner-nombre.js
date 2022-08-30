/**
* Jeu du nombre mystère
* @author  Xavier Rossi
* @version 0.1
* @since   2022-08-30
*/

// Main IIFE (Immediately-Invoked Function Expression, se prononce "iffy")
(function main() {
    'use strict';

    /**
     * Retourne un nombre entier aléatoire compris entre min et max
     * @param min
     * @param max
     * @returns {number}
     */
    function tireNombre(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    const MINIMUM = 0, MAXIMUM = 100;
    const LENOMBRE = tireNombre(MINIMUM, MAXIMUM);
    let number = 0, essai = 0;
    do {
        essai++;
        number = Number(prompt('Donne moi donc un nombre'));
        if (number > LENOMBRE){
            alert('Ton nombre est trop grand');
        } else if (number < LENOMBRE) {
            alert('Ton nombre est trop petit');
        } else {
            window.alert('Wp après ' + essai + ' essai(s) bg !');
        }
    }while (number !== LENOMBRE);
}()); // main IIFE
