class Person {
  // moved here b/c it was identical
  constructor(name, quirkyFact) {
    this.name = name;
    this.quirkyFact = quirkyFact;
  }

  // moved here b/c it was identical
  bio() {
    return `My name is ${this.name} and here's my quirky fact: ${this.quirkyFact}`;
  }
}

class Student extends Person {
  // stays in Student class since it's specific to students only
  enroll(cohort) {
    this.cohort = cohort;
  }
   //need a bit more info than provided just in Person.bio()
  bio() {
    return `I'm a student at Lighthouse Labs (aka Labber)${this.cohort === undefined ? "." : ` in the ${this.cohort} cohort.`} ${super.bio()}`;
    //specifacally done with a template literal because person.bio() also returns a string.
  }
}


class Mentor extends Person {
  // specific to mentors
  goOnShift() {
    this.onShift = true;
  }

  // specific to mentors
  goOffShift() {
    this.onShift = false;
  }
  //need a bit more info than provided just in Person.bio()
  bio() {
    return `I'm a mentor at Lighthouse Labs. ${super.bio()}`;
    //specifacally done with a template literal because person.bio() also returns a string.
  }
}

let nickMeis = new Student("Nicholas Meisenheimer","Likes the boots");

nickMeis.enroll("February 1st");

console.log(nickMeis.bio());