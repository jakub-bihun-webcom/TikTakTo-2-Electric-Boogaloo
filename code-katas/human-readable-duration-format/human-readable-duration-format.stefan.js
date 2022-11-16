/**
 * @param {number} duration - duration in seconds
 * @returns {string}
 */
function formatDurationStefan(duration) {
  if (duration === 0) {
    return "now";
  }

  const years = Math.floor(duration / 31536000);
  const restOfYears = duration % 31536000;
  const days = Math.floor(restOfYears / 86400);
  const restOfDays = restOfYears % 86400;
  const hours = Math.floor(restOfDays / 3600);
  const restOfHours = restOfDays % 3600;
  const minutes = Math.floor(restOfHours / 60);
  const seconds = restOfHours % 60;

  const yearOutput = formatTimeUnit("year", years);
  const dayOutput = formatTimeUnit("day", days);
  const hourOutput = formatTimeUnit("hour", hours);
  const minuteOutput = formatTimeUnit("minute", minutes);
  const secondOutput = formatTimeUnit("second", seconds);

  const outputs = [
    yearOutput,
    dayOutput,
    hourOutput,
    minuteOutput,
    secondOutput,
  ];

  return createFinalOutput(outputs);
}

/**
 * @param {string} name
 * @param {number} count
 */
function formatTimeUnit(name, count) {
  if (count === 0) {
    return "";
  }
  if (count === 1) {
    return `${count} ${name}`;
  }
  return `${count} ${name}s`;
}

/**
 * @param {string[]} outputs
 * @returns {string}
 */
function createFinalOutput(outputs) {
  const nonEmptyOutputs = outputs.filter((output) => output !== "");

  let finalOutput = "";

  nonEmptyOutputs.forEach((output, i) => {
    if (!finalOutput) {
      finalOutput = output;
    } else if (i === nonEmptyOutputs.length - 1) {
      finalOutput += " and " + output;
    } else {
      finalOutput += ", " + output;
    }
  });

  return finalOutput;
}
