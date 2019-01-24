// CODE here for your Lambda Classes

class Person {
  constructor(props) {
    this.name = props.name;
    this.age = props.age;
    this.location = props.location;
    this.gender = props.gender;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}

class Instructor extends Person {
  constructor(instructAttrs) {
    super(instructAttrs);
    this.specialty = instructAttrs.specialty;
    this.favLanguage = instructAttrs.favLanguage;
    this.catchPhrase = instructAttrs.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}`;
  }
  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}`;
  }
  //stretch
  changeGrade(student) {
    // this math should give us either 0 or 1 and zero evaluates to false
    if (Math.floor(Math.random() * 2)) {
      student.grade += 10;
      console.log(
        `${this.name} gave ${student.name} 10pts! Student now has a grade of ${
          student.grade
        }.`
      );
    } else {
      student.grade -= 10;
      console.log(
        `${this.name} took 10pts from ${
          student.name
        }! Student now has a grade of ${student.grade}.`
      );
    }
  }
}

class Student extends Person {
  constructor(studentAttrs) {
    super(studentAttrs);
    this.previousBackground = studentAttrs.previousBackground;
    this.className = studentAttrs.className;
    this.favSubjects = studentAttrs.favSubjects;
    this.grade = studentAttrs.grade;
    this.isGraduated = false;
  }
  listSubjects() {
    this.favSubjects.forEach(element => console.log(element));
  }
  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }
  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}`;
  }
  // stretch: I added an isGraduated property so that I could use a loop to grade the student later
  graduate() {
    if (this.grade > 70) {
      this.isGraduated = true;
      console.log(`${this.name} has enough points to graduate!`);
    } else {
      console.log(`${this.name} does not have enough points to graduate.`);
    }
  }
}

class ProjectManager extends Instructor {
  constructor(pmAttrs) {
    super(pmAttrs);
    this.gradClassName = pmAttrs.gradClassName;
    this.favInstructor = pmAttrs.favInstructor;
  }
  standUp(slackChannel) {
    return `${this.name} announces to ${slackChannel} @channel standy times!`;
  }
  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}`;
  }
}

// person
let randomPerson = new Person({
  name: "Random",
  age: 30,
  location: "the moon",
  gender: "M"
});
// instructor
let randomInstructor = new Instructor({
  name: "Instructor Random",
  age: 42,
  location: "Mars",
  gender: "F",
  specialty: "JS",
  favLanguage: "JS",
  catchPhrase: "Have you googled it?"
});

// student
let randomStudent = new Student({
  name: "Random Student",
  age: 27,
  location: "Earth",
  gender: "F",
  previousBackground: "none",
  className: "Web17",
  favSubjects: ["JS", "HTML", "Preprocessing", "react"],
  grade: 60
});

// project manager
let randomPM = new ProjectManager({
  name: "Random Project Manager",
  age: 29,
  location: "the cloud",
  gender: "M",
  gradClassName: "Web14",
  favInstructor: "Instructor Random"
});

// person tests
console.log(randomPerson.name);
console.log(randomPerson.age);
console.log(randomPerson.location);
console.log(randomPerson.gender);
console.log(randomPerson.speak());

//instructor tests
console.log(randomInstructor.name);
console.log(randomInstructor.age);
console.log(randomInstructor.location);
console.log(randomInstructor.gender);
console.log(randomInstructor.specialty);
console.log(randomInstructor.favLanguage);
console.log(randomInstructor.catchPhrase);
console.log(randomInstructor.speak());
console.log(randomInstructor.demo("JS"));
console.log(randomInstructor.grade(randomStudent, "JS"));

// student tests
console.log(randomStudent.name);
console.log(randomStudent.age);
console.log(randomStudent.location);
console.log(randomStudent.gender);
console.log(randomStudent.className);
console.log(randomStudent.previousBackground);
console.log(randomStudent.favSubjects);
console.log(randomStudent.speak());
console.log(randomStudent.listSubjects());
console.log(randomStudent.PRAssignment("JS"));
console.log(randomStudent.sprintChallenge("JS"));

// pm tests
console.log(randomPM.name);
console.log(randomPM.age);
console.log(randomPM.location);
console.log(randomPM.gender);
console.log(randomPM.gradClassName);
console.log(randomPM.favInstructor);
console.log(randomPM.speak());
console.log(randomPM.demo("JS"));
console.log(randomPM.grade(randomStudent, "JS"));
console.log(randomPM.standUp("random channel"));
console.log(randomPM.debugsCode(randomStudent, "JS"));

// stretch
while (!randomStudent.isGraduated) {
  randomPM.changeGrade(randomStudent);
  randomStudent.graduate();
}
