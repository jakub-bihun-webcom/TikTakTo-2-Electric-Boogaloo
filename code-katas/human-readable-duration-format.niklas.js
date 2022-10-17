function formatDurationNiklas(seconds) {
    if (seconds === 0) {
        return "now";
    }
    else {
        return calculateDuration(seconds);
    }
}

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

    console.log('TimeArray', timeArray);
    console.log(output(years, 'year')
    + commaDays(timeArray) + output(days, 'day')
    + commaHours(timeArray) + output(hours, 'hour')
    + commaMinutes(timeArray) + output(minutes, 'minute')
    + commaSeconds(timeArray) + output(seconds, 'second'));

    return output(years, 'year')
            + commaDays(timeArray) + output(days, 'day')
            + commaHours(timeArray) + output(hours, 'hour')
            + commaMinutes(timeArray) + output(minutes, 'minute')
            + commaSeconds(timeArray) + output(seconds, 'second');
}

function output(input, text) {
    if (input === 0) {
        return '';
    } else if (input === 1) {
        return input + ' ' + text + ''
    } else return input + ' ' + text + 's'
}

function commaDays(timeArray) {
    const newArray = [timeArray[1], timeArray[2], timeArray[3], timeArray[4]];
    if (timeArray[0] === 0) {
        return ''
    } else if (newArray.filter(biggerThan1).length === 1) {
        return 'and '
    } else return ', '
}

function commaHours(timeArray) {
    const newArray = [timeArray[2], timeArray[3], timeArray[4]];
    if (timeArray[0] === 0 && timeArray[1] === 0) {
        return ''
    } else if (timeArray[4] === 0 && timeArray[3] === 0 && timeArray[2] === 0) {
        return ''
    } else if (newArray.filter(biggerThan1).length === 1) {
        return 'and '
    } else return ', '
}

function commaMinutes(timeArray) {
    const newArray = [timeArray[3], timeArray[4]]
    if (timeArray[0] === 0 && timeArray[1] === 0 && timeArray[2] === 0) {
        return ''
    } else if (timeArray[3] === 0 && timeArray[4] === 0) {
        return ''
    } else if (newArray.filter(biggerThan1) > 0) {
        return ' and '
    } else if (timeArray[2] === 0) {
        return ''
    }
    else return ', '
}

function commaSeconds(timeArray) {
    const newArray = [timeArray[0], timeArray[1], timeArray[2], timeArray[3]]
    if (timeArray[4] === 0) {
        return ''
    } else if (newArray.filter(biggerThan1).length === 0) {
        return ''
    } else if (timeArray[3] === 0){
        return ''
    }
        return ' and '
}

function biggerThan1(number) {
    return number > 0;
}
