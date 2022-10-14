/**
 * @param {string} title
 * @param {string} [color]
 */
function showToast(title, color = 'green') {
    iziToast.show({
        title,
        message: 'Bitte setze das Spielfeld mit Restart Game zurück',
        color,
    });
}
