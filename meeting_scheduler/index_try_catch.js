onload = function (event) {
  messageText = document.getElementById('msg')
  console.log('messageText', (msg));
  valid = false;
  message = '';
}

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


try {
  console.log(meetingDurationNumber, 'meetingDuration'); 
  console.log(meetingStartNumber, 'meetingStart');
  console.log(workEndNumber, 'workEnd');
  console.log(workStartNumber, 'workStart');

  (meetingDurationNumber && meetingStartNumber && workEndNumber && workStartNumber) != NaN;
  workStartNumber < workEndNumber;
  meetingStartNumber > workStartNumber;
  meetingStartNumber <= workEndNumber;
  (meetingDurationNumber + meetingStartNumber) <= workEndNumber;
  valid = true;
  message = ('Das Meeting kann stattfinden');


} catch (error){
  console.error(error);
}
}
/*
function meetingValidation(meetingDurationNumber, meetingStartNumber, workStartNumber, workEndNumber) {
  console.log(meetingDurationNumber, 'meetingDuration') 
  console.log(meetingStartNumber, 'meetingStart')
  console.log(workEndNumber, 'workEnd')
  console.log(workStartNumber, 'workStart');

  if (workStartNumber > workEndNumber) {
    message = ('Hast du vielleicht die Startzeit mit der Endzeit verwechselt?')
    valid = false;
  } else if (!meetingDurationNumber || !meetingStartNumber || !workEndNumber || !workStartNumber)  {
    message = ('Bitte fülle alle Felder aus!')
    valid = false;
  } else if (meetingStartNumber < workStartNumber){
    message =('Das Meeting beginnt vor dem Arbeitsbeginn.')
    valid = false;
  } else if (meetingStartNumber >= workEndNumber) {
    message = ('Das Meeting startet nachdem dein Arbeitstag geendet hat.')
    valid = false;
  } else if ((meetingDurationNumber + meetingStartNumber) >= (++workEndNumber)) {
    message = ('Das Meeting würde deine Arbeitszeit überschreiten.')
    valid = false;
  } else if (meetingDurationNumber < 5) {
    message = ('Das Meeting sollte mindestens fünf Minuten dauern')
    valid = false;
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

} */