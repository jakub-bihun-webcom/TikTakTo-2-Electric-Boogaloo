/**
 * @param {string} title
 * @param {string} [message]
 * @param {string} [color]
 */
function showToast(title, message = 'Bitte setze das Spielfeld mit Restart Game zurück', color = 'green') {
    iziToast.show({title, message, color});
}
