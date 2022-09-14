onload = function (event) {
  messageText = document.getElementById('msg')
  console.log('messageText', (msg))
  message = '';
}

let workStart;
let workEnd;
let meetingStart;
let meetingDuration;

function onButtonSubmission() {
  workStart = document.getElementById('workStart').value;
  workEnd = document.getElementById('workEnd').value;
  meetingStart = document.getElementById('meetingStart').value;
  meetingDuration = document.getElementById('meetingDuration').value;
  
  timeToNumber ();
}
// scheduleMeeting()
// throw new error 
// js data 
function timeToNumber () {
  const workStartSplit = workStart.split(':');
  const workStartNumber = (+workStartSplit[0]) * 60 + (+workStartSplit[1]);
  const workEndSplit = workEnd.split(':');
  const workEndNumber = (+workEndSplit[0]) * 60 + (+workEndSplit[1]);
  const meetingStartSplit = meetingStart.split(':');
  const meetingStartNumber = (+meetingStartSplit[0]) * 60 + (+meetingStartSplit[1]);
  const meetingDurationNumber = parseFloat(meetingDuration);
  validateMeeting(meetingDurationNumber, meetingStartNumber, workStartNumber, workEndNumber);
}

function validateMeeting(meetingDuration, meetingStart, workStart, workEnd) {
  console.log(meetingDuration, 'meetingDuration') 
  console.log(meetingStart, 'meetingStart')
  console.log(workEnd, 'workEnd')
  console.log(workStart, 'workStart');

  let valid = false;

  if (workStart > workEnd) {
    message = ('Hast du vielleicht die Startzeit mit der Endzeit verwechselt?')
  } else if (!meetingDuration || !meetingStart || !workEnd || !workStart)  {
    message = ('Bitte fülle alle Felder aus!')
  } else if (meetingStart < workStart){
    message =('Das Meeting beginnt vor dem Arbeitsbeginn.')
  } else if (meetingStart >= workEnd) {
    message = ('Das Meeting startet nachdem dein Arbeitstag geendet hat.')
  } else if ((meetingDuration + meetingStart) >= (++workEnd)) {
    message = ('Das Meeting würde deine Arbeitszeit überschreiten.')
  } else if (meetingDuration < 5) {
    message = ('Das Meeting sollte mindestens fünf Minuten dauern')
  } else {
    message = ('Das Meeting kann stattfinden.');
    valid = true;
  } 

  if (valid) {
    messageText.style.color = '#a2b9bc';
  } else {
    messageText.style.color = 'red';
  }
  messageText.innerText = message;

}