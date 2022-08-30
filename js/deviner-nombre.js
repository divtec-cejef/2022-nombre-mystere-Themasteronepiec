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
    const LENOMBRE = tireNombre(0, 100);
    let numberEquals = false, essai = 0;
    while (!numberEquals){
        let number = prompt('Donne moi donc un nombre');
        if (number > LENOMBRE){
            window.alert('Ton nombre est trop grand');
        } else if (number < LENOMBRE) {
            window.alert('Ton nombre est trop petit');
        } else {
            numberEquals = true;
            window.alert('Wp après ' + essai + ' essai(s) bg !');
        }
        essai++;
    }
}()); // main IIFE
