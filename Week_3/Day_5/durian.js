class Employee {
  constructor(name, title, salary) {
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.boss = null;
    this.subordinates = [];
  }
  addSubordinate(subordinate) {
    this.subordinates.push(subordinate);
    subordinate.boss = this;
  }
  numberOfSubordinates() {
    return this.subordinates.length;
  }
  get numberOfPeopleToCEO() {
    let numberOfPeople = 0;
    let currentEmployee = this;

    // climb "up" the tree (using iteration), counting nodes, until no boss is found
    while (currentEmployee.boss) {
      currentEmployee = currentEmployee.boss;
      numberOfPeople++;
    }

    return numberOfPeople;
  }
  hasSameBoss(employee) {
    return this.boss === employee.boss;
  }
  employeesThatMakeOver(amount) {
    let employees = []; // 1

    if (this.salary > amount) {
      employees.push(this); // 2
    }

    for (const subordinate of this.subordinates) {
      const subordinatesThatMakeOver = subordinate.employeesThatMakeOver(
        amount
      ); // 3
      employees = employees.concat(subordinatesThatMakeOver);
    }

    return employees;
  }
  get totalEmployees() {
    let totalEmployees = 0; // 1

    if (this.numberOfSubordinates() > 0) {
      totalEmployees += this.numberOfSubordinates();
      for (let subordinate of this.subordinates) {
        totalEmployees += subordinate.totalEmployees;
      }
    }

    return totalEmployees;
  }
}

const ada = new Employee("Ada", "Ceo", 3000000.0);

const craig = new Employee("Craig", "VP Software", 1000000);
const arvinder = new Employee("Arvinder", "Chief Design Officer", 1000000);
const angela = new Employee("Angela", "VP Retail", 1000000);
const phil = new Employee("Phil", "VP Marketing", 1000000);

ada.addSubordinate(craig);
ada.addSubordinate(arvinder);
ada.addSubordinate(angela);
ada.addSubordinate(phil);

const simone = new Employee("Simone", "Software Engineer", 300000);
const ali = new Employee("Ali", "Software Engineer", 300000);
const florida = new Employee("Florida", "Social Media Manager", 300000);
const david = new Employee("David", "Director of Marketing", 300000);
const brian = new Employee("Brian", "Head of Copy", 300000);
const karla = new Employee("Karla", "Merchandiser", 300000);

craig.addSubordinate(simone);
craig.addSubordinate(ali);

phil.addSubordinate(florida);
phil.addSubordinate(david);
phil.addSubordinate(brian);

angela.addSubordinate(karla);

// let wealthy = ada.employeesThatMakeOver(400000);
// console.log(wealthy)

let numEmp = craig.totalEmployees;
console.log(numEmp);
