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
 * @param {number} seconds 
 * @returns {string} String im human-readable-duration-format
 */
function calculateDuration(seconds) {
    const timeArray = [];
    const years = Math.floor(seconds / 31536000);
    const restOfYears = seconds % 31536000;
    const days = Math.floor(restOfYears / 86400);
    const restOfDays = restOfYears % 86400;
    const hours = Math.floor(restOfDays / 3600);
    const restOfHours = restOfDays % 3600;
    const minutes = Math.floor(restOfHours / 60);
    const second = restOfHours % 60;
    return combineWithSeperators(years, days, hours, minutes, second);
}

/**
 * Funktion, welche als Parameter die Zeiten nimmt und einen zusammengesetzten String mit den einzelnen Zeiten zurückgibt. 
 * @param {number} years 
 * @param {number} days 
 * @param {number} hours 
 * @param {number} minutes 
 * @param {number} seconds 
 * @returns {string} Zusammengesetzter String des Zeit
 */
function combineWithSeperators(years, days, hours, minutes, seconds) {
    const unitCount = [];
    const timeFormatCount = []

    if (years !== 0) {
        unitCount.push(years);
        timeFormatCount.push(timeFormat(years, 'year'));
    }
    if (days !== 0) {
        unitCount.push(days);
        timeFormatCount.push(timeFormat(days, 'day'));
    }
    if (hours !== 0) {
        unitCount.push(hours);
        timeFormatCount.push(timeFormat(hours, 'hour'));
    }
    if (minutes !== 0) {
        unitCount.push(minutes);
        timeFormatCount.push(timeFormat(minutes, 'minute'));
    }
    if (seconds !== 0) {
        unitCount.push(seconds);
        timeFormatCount.push(timeFormat(seconds, 'second'));
    }

    let combinedString = '';

    for (let currentUnitIndex = 0; currentUnitIndex < unitCount.length; currentUnitIndex++) {
        let prefix
        if (currentUnitIndex < unitCount.length - 1) {
            if (currentUnitIndex < unitCount.length - 2) {
                prefix = ', '
            } else {
                prefix = ' and '
            } 
        } else {
            prefix = ''
        }
        combinedString = combinedString + unitCount[currentUnitIndex] + timeFormatCount[currentUnitIndex] + prefix;
    }
    return combinedString
}


/**
 * Überprüft, ob der Input ungleich 0 ist, und fügt bei dem Text ein 's' für die Mehrzahl ein.
 * @param {number} unitCount Die Anzahl der Zeiteinheit
 * @param {string} timeUnit Die jeweilige Zeiteinheit
 * @returns {string} String im richtigen Format
 */
function timeFormat(unitCount, timeUnit) {
    if (unitCount === 1) {
        return ' ' + timeUnit
    } else return ' ' + timeUnit + 's'
}
