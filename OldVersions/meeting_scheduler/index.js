onload = function (event) {
  messageText = document.getElementById("msg");
  console.log("messageText", msg);
  message = "";
};
let workStart;
let workEnd;
let meetingStart;
let meetingDuration;

function onButtonSubmission() {
  workStart = document.getElementById("workStart").value;
  workEnd = document.getElementById("workEnd").value;
  meetingStart = document.getElementById("meetingStart").value;
  meetingDuration = document.getElementById("meetingDuration").value;

  try {
    timeToNumber();
    messageText.style.color = "#a2b9bc";
    messageText.innerText = "Das Meeting kann stattfinden!";
  } catch (error) {
    messageText.style.color = "red";
    messageText.innerText = error.message;
  }
}

function timeToNumber() {
  const workStartSplit = workStart.split(":");
  const workStartNumber = +workStartSplit[0] * 60 + +workStartSplit[1];
  const workEndSplit = workEnd.split(":");
  const workEndNumber = +workEndSplit[0] * 60 + +workEndSplit[1];
  const meetingStartSplit = meetingStart.split(":");
  const meetingStartNumber = +meetingStartSplit[0] * 60 + +meetingStartSplit[1];
  const meetingDurationNumber = parseFloat(meetingDuration);
  validateMeeting(
    meetingDurationNumber,
    meetingStartNumber,
    workStartNumber,
    workEndNumber
  );
}
function validateMeeting(meetingDuration, meetingStart, workStart, workEnd) {
  console.log(meetingDuration, "meetingDuration");
  console.log(meetingStart, "meetingStart");
  console.log(workEnd, "workEnd");
  console.log(workStart, "workStart");

  if (workStart > workEnd) {
    throw new Error(
      "Hast du vielleicht die Startzeit mit der Endzeit verwechselt?"
    );
  } else if (!meetingDuration || !meetingStart || !workEnd || !workStart) {
    throw new Error("Bitte fülle alle Felder aus!");
  } else if (meetingStart < workStart) {
    throw new Error("Das Meeting beginnt vor dem Arbeitsbeginn.");
  } else if (meetingStart >= workEnd) {
    throw new Error("Das Meeting startet nachdem dein Arbeitstag geendet hat.");
  } else if (meetingDuration + meetingStart >= ++workEnd) {
    throw new Error("Das Meeting würde deine Arbeitszeit überschreiten.");
  } else if (meetingDuration < 5) {
    throw new Error("Das Meeting sollte mindestens fünf Minuten dauern");
  }
}
