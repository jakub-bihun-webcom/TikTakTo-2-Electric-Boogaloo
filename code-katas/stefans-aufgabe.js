const Type = {
  CEO: 'CEO',
  TEAMLEAD: 'TEAMLEAD',
  DULLY: 'DULLY',
  STUDENT: 'STUDENT',
  AZUBI: 'AZUBI'
};

class Employee {
  /**
   * Creates a new Employee.
   * @param {string} name
   * @param {Type} type
   * @param {number} salary
   */
  constructor(name, type, salary) {
    this.name = name;
    this.type = type;
    this.salary = salary;
  }

  introduce() {
    const begruessung = 'Hallo mein Name ist ' + this.name + ' und ich arbeite als ' + this.type;
    if (this.type === Type.AZUBI || this.type === Type.STUDENT) {
      return console.log(begruessung);
    } else {
      return console.log(begruessung + ' und verdiene ' + this.salary);
    }
  }
}

const employees = [
  new Employee('M', Type.CEO, 1000000),
  new Employee('AK', Type.TEAMLEAD, 300),
  new Employee('G', Type.DULLY, 150),
  new Employee('S', Type.DULLY, 100),
  new Employee('J', Type.AZUBI, 42),
  new Employee('N', Type.AZUBI, 50),
  new Employee('M', Type.AZUBI, 70),
  new Employee('G', Type.STUDENT, 3),
  new Employee('M', Type.STUDENT, 5)
];

const aufgabe1 = employees;

const aufgabe2 = employees.filter(function (element) {
  return element.type !== Type.AZUBI && element.type !== Type.STUDENT;
});

const allAzubis = employees.filter(function (element) {
  return element.type === Type.AZUBI;
});

// const aufgabe3 = Math.max(...allAzubis())
const aufgabe3 = allAzubis.sort((a, b) => {
  return a.salary - b.salary;
});

const aufgabe4 = employees.filter(function (element) {
  return element.name === 'M';
});

const aufgabe5 = employees.reduce((accumulator, object) => {
  return accumulator + object.salary;
}, 0);

/**
 * Aufgaben:
 * 1. Gebe eine Liste mit allen Mitarbeitern mit Name, Stellenbezeichnung und Gehalt auf der Konsole aus.
 * 2. Dieselbe Liste wie bei 1, aber diesmal nur Mitarbeiter, die keine Azubis oder Studenten sind.
 * 3. Finde den Azubi mit dem höchsten Gehalt.
 * 4. Erstelle eine neue Liste mit allen Mitarbeitern, die "M" als Namen haben.
 * 5. Ermittle das Gehalt, das alle Mitarbeiter zusammen verdienen.
 * 6. Erweitere die Klasse Employee um eine Methode introduce(), die einen String zurückgibt, in dem der Mitarbeiter
 * sich vorstellt - dazu gehören Name, Stellenbezeichnung und Gehalt. Ausnahme: Bei Azubis und Studenten soll das Gehalt
 * weggelassen werden. Anschließend Aufgabe 1 noch einmal mit der neuen introduce()-Methode machen.
 *
 * Erstelle pro Aufgabe eine eigene Funktion. Versuche nach Möglichkeit, die Methoden von Array zu verwenden
 * (siehe https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).
 *
 * PS: Ähnlichkeiten zu real existierenden Personen sind rein zufällig und nicht beabsichtigt!
 */

console.log('Aufgabe 1 ', aufgabe1);
console.log('Aufgabe 2 ', aufgabe2);
console.log('Aufgabe 3 ', aufgabe3[aufgabe3.length - 1]);
console.log('Aufgabe 4 ', aufgabe4);
console.log('Aufgabe 5 ', aufgabe5);
const aufgabe6 = employees.forEach(element => element.introduce());
