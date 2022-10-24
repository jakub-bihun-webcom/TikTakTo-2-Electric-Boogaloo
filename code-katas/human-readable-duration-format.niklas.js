/**
 * Wenn der übergebene Parameter gleich null ist wird "now" zurückgegeben, ansonsten werden die Zeiten mit calculateDuration ausgerechnet.
 * @param {number} seconds 
 * @returns {string} 
 */
function formatDurationNiklas(seconds) {
    if (seconds === 0) {
        return "now";
    }
    else {
        return calculateDuration(seconds);
    }
}

/**
 * Funktion rechnet die Sekunden um und gibt die Zeit im richtigen Format zurück.
 * @param number[] time 
 * @returns {string} String im human-readable-duration-format
 */
function calculateDuration(time) {
    const timeArray = [];
    const years = Math.floor(time / 31536000);
    const restOfYears = time % 31536000;
    const days = Math.floor(restOfYears / 86400);
    const restOfDays = restOfYears % 86400;
    const hours = Math.floor(restOfDays / 3600);
    const restOfHours = restOfDays % 3600;
    const minutes = Math.floor(restOfHours / 60);
    const seconds = restOfHours % 60;
    timeArray.push(years, days, hours, minutes, seconds);
    return output(years, 'year')
        + commaDays(timeArray) + output(days, 'day')
        + commaHours(timeArray) + output(hours, 'hour')
        + commaMinutes(timeArray) + output(minutes, 'minute')
        + commaSeconds(timeArray) + output(seconds, 'second');
}

/**
 * Überprüft ob der Input ungleich 0 ist und fügt bei dem Text ein 's' für die Mehrzahl ein.
 * @param {number} input Die Anzahl der Zeiteinheit
 * @param {string} text Die jeweilige Zeiteinheit
 * @returns {string} String im richtigen Format
 */
function output(input, text) {
    if (input === 0) {
        return '';
    } else if (input === 1) {
        return input + ' ' + text + ''
    } else return input + ' ' + text + 's'
}

/**
 * Nimmt die Prüfung vor, ob an dieser Stelle ein Komma, ein 'and', oder nichts eingefügt werden soll
 * @param number[] timeArray 
 * @returns {string} Entweder wird ein '', 'and ' oder ', ' zurückgegeben.
 */
function commaDays(timeArray) {
    const newArray = [timeArray[1], timeArray[2], timeArray[3], timeArray[4]];
    if (timeArray[0] === 0) {
        return ''
    } else if (newArray.filter(filterZeros).length === 1) {
        return 'and '
    } else return ', '
}

/**
 * Überprüft ob an dieser Stelle ein Komma ein 'and' oder nichts eingefügt werden soll.
 * @param number[] timeArray 
 * @returns {string} Entweder wird ein '', 'and ' oder ', ' zurückgegeben.
 */
function commaHours(timeArray) {
    const newArray = [timeArray[2], timeArray[3], timeArray[4]];
    if (timeArray[0] === 0 && timeArray[1] === 0) {
        return ''
    } else if (timeArray[4] === 0 && timeArray[3] === 0 && timeArray[2] === 0) {
        return ''
    } else if (newArray.filter(filterZeros).length === 1) {
        return 'and '
    } else return ', '
}

/**
 * Nimmt die Prüfung vor, ob an dieser Stelle ein Komma, ein 'and', oder nichts eingefügt werden soll
 * @param number[] timeArray 
 * @returns {string} Entweder wird ein '', 'and ' oder ', ' zurückgegeben.
 */
function commaMinutes(timeArray) {
    const newArray = [timeArray[3], timeArray[4]]
    if (timeArray[0] === 0 && timeArray[1] === 0 && timeArray[2] === 0) {
        return ''
    } else if (timeArray[3] === 0 && timeArray[4] === 0) {
        return ''
    } else if (newArray.filter(filterZeros) > 0) {
        return ' and '
    } else if (timeArray[2] === 0) {
        return ''
    }
    else return ', '
}

/**
 * Funktion, welche überprüft ob an dieser Stelle ein Komma ein 'and' oder nichts eingefügt werden soll.
 * @param number[] timeArray 
 * @returns {string} Entweder wird ein '' oder ' and ' zurückgegeben.
 */
function commaSeconds(timeArray) {
    const newArray = [timeArray[0], timeArray[1], timeArray[2], timeArray[3]]
    if (timeArray[4] === 0) {
        return ''
    } else if (newArray.filter(filterZeros).length === 0) {
        return ''
    } else return ' and '
}

/**
 * Prüft ob die übergebene Zahl größer 0 ist.
 * @param {number} number 
 * @returns {number} Wenn number größer 0 ist.
 */
function filterZeros(number) {
    return number > 0;
}
