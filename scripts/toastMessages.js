/**
 * Funktion, welche aufgerufen wird wenn Spieler X gewonnen hat. 
 * Gibt eine Rückmeldung das Spieler X gewonnen hat.
 */
function toastPlaxerXWin() {
    iziToast.show({
        title: 'Glückwunsch Spieler X',
        message: 'Bitte setze das Spielfeld mit Restart Game zurück',
    });
}

/**
 * Funktion, welche aufgerufen wird wenn Spieler O gewonnen hat. 
 * Gibt eine Rückmeldung das Spieler O gewonnen hat.
 */
function toastPlaxerOWin() {
    iziToast.show({
        title: 'Glückwunsch Spieler O',
        message: 'Bitte setze das Spielfeld mit Restart Game zurück',
    });
}

/**
 * Funktion, welche aufgerufen wird wenn es ein Unentschieden gibt.
 * Gibt eine Rückmeldung das das Spiel Unentschieden ausgegangen ist.
 */
function toastUnentschieden() {
    iziToast.show({
        title: 'Unentschieden!',
        message: 'Bitte setze das Spielfeld mit Restart Game zurück',
    });
}