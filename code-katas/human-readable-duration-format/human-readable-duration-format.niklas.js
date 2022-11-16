/**
 * Wenn der übergebene Parameter gleich null ist wird "now" zurückgegeben, ansonsten werden die Zeiten mit calculateDuration ausgerechnet.
 * @param {number} seconds
 * @returns {string}
 */
function formatDurationNiklas(seconds) {
  if (seconds === 0) {
    return 'now';
  } else {
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
  return formatWithSeperators(years, days, hours, minutes, second);
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
function formatWithSeperators(years, days, hours, minutes, seconds) {
  const unitCounts = [];
  const formattedTimes = [];

  if (years !== 0) {
    unitCounts.push(years);
    formattedTimes.push(formatUnit(years, 'year'));
  }
  if (days !== 0) {
    unitCounts.push(days);
    formattedTimes.push(formatUnit(days, 'day'));
  }
  if (hours !== 0) {
    unitCounts.push(hours);
    formattedTimes.push(formatUnit(hours, 'hour'));
  }
  if (minutes !== 0) {
    unitCounts.push(minutes);
    formattedTimes.push(formatUnit(minutes, 'minute'));
  }
  if (seconds !== 0) {
    unitCounts.push(seconds);
    formattedTimes.push(formatUnit(seconds, 'second'));
  }

  let combinedString = '';

  for (let currentUnitIndex = 0; currentUnitIndex < unitCounts.length; currentUnitIndex++) {
    let suffix;
    const isLast = currentUnitIndex === unitCounts.length - 1;
    const isSecondLast = currentUnitIndex === unitCounts.length - 2;
    if (!isLast) {
      if (!isSecondLast) {
        suffix = ', ';
      } else {
        suffix = ' and ';
      }
    } else {
      suffix = '';
    }
    combinedString = combinedString + unitCounts[currentUnitIndex] + formattedTimes[currentUnitIndex] + suffix;
  }
  return combinedString;
}

/**
 * Überprüft, ob der Input ungleich 0 ist, und fügt bei dem Text ein 's' für die Mehrzahl ein.
 * @param {number} unitCount Die Anzahl der Zeiteinheit
 * @param {string} timeUnit Die jeweilige Zeiteinheit
 * @returns {string} String im richtigen Format
 */
function formatUnit(unitCount, timeUnit) {
  if (unitCount === 1) {
    return ' ' + timeUnit;
  } else return ' ' + timeUnit + 's';
}
