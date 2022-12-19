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

  /**
   * Liefert die Begrüßung.
   * @return {string}
   */
  introduce() {
    return 'Hallo i bims 1 Mitarbeiter';
  }

  /**
   * Liefert den Steuersatz in %.
   * @return {number}
   */
  getTaxRate() {
    return 50;
  }
}

class PoorEmployee extends Employee {
  introduce() {
    return 'Hallo mein Name ist ' + this.name + ' und ich arbeite als ' + this.type;
  }

  getTaxRate() {
    return 0;
  }
}

class RichEmployee extends Employee {
  introduce() {
    return 'Hallo mein Name ist ' + this.name + ', ich arbeite als ' + this.type + ' und verdiene ' + this.salary;
  }

  getTaxRate() {
    return 90;
  }
}

/**
 * Creates a new Employee.
 * @param {string} name
 * @param {Type} type
 * @param {number} salary
 * @return Employee
 */
function createEmployee(name, type, salary) {
  switch (type) {
    case Type.CEO:
      return new RichEmployee(name, type, salary);
    case Type.AZUBI:
    case Type.STUDENT:
      return new PoorEmployee(name, type, salary);
    default:
      return new Employee(name, type, salary);
  }
}

const employees = [
  createEmployee('M', Type.CEO, 1000000),
  createEmployee('AK', Type.TEAMLEAD, 300),
  createEmployee('G', Type.DULLY, 150),
  createEmployee('S', Type.DULLY, 100),
  createEmployee('J', Type.AZUBI, 42),
  createEmployee('N', Type.AZUBI, 50),
  createEmployee('M', Type.AZUBI, 70),
  createEmployee('G', Type.STUDENT, 3),
  createEmployee('M', Type.STUDENT, 5)
];

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

// Aufgabe 6
employees.forEach(employee => {
  console.log(employee.introduce());
  console.log('Steuersatz: ' + employee.getTaxRate() + '%');
});
