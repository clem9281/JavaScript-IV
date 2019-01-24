// CODE here for your Lambda Classes

class Person {
  constructor(props) {
    this.name = props.name;
    this.age = props.age;
    this.location = props.location;
    this.gender = props.gender;
  }
  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
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
    console.log(`Today we are learning about ${subject}`);
  }
  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}`);
  }
}

class Student extends Person {
  constructor(studentAttrs) {
    super(studentAttrs);
    this.previousBackground = studentAttrs.previousBackground;
    this.className = studentAttrs.className;
    this.favSubjects = studentAttrs.favSubjects;
  }
  listSubjects() {
    this.favSubjects.forEach(element => console.log(element));
  }
  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }
  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
  }
}

class ProjectManager extends Instructor {
  constructor(pmAttrs) {
    super(pmAttrs);
    this.gradClassName = pmAttrs.gradClassName;
    this.favInstructor = pmAttrs.favInstructor;
  }
  standUp(slackChannel) {
    console.log(
      `${this.name} announces to ${slackChannel} @channel standy times!`
    );
  }
  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
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
  favSubjects: ["JS", "HTML", "Preprocessing", "react"]
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
randomPerson.speak();

//instructor tests
console.log(randomInstructor.name);
console.log(randomInstructor.age);
console.log(randomInstructor.location);
console.log(randomInstructor.gender);
console.log(randomInstructor.specialty);
console.log(randomInstructor.favLanguage);
console.log(randomInstructor.catchPhrase);
randomInstructor.speak();
randomInstructor.demo("JS");
randomInstructor.grade(randomStudent, "JS");

// student tests
console.log(randomStudent.name);
console.log(randomStudent.age);
console.log(randomStudent.location);
console.log(randomStudent.gender);
console.log(randomStudent.className);
console.log(randomStudent.previousBackground);
console.log(randomStudent.favSubjects);
randomStudent.speak();
randomStudent.listSubjects();
randomStudent.PRAssignment("JS");
randomStudent.sprintChallenge("JS");

// pm tests
console.log(randomPM.name);
console.log(randomPM.age);
console.log(randomPM.location);
console.log(randomPM.gender);
console.log(randomPM.gradClassName);
console.log(randomPM.favInstructor);
randomPM.speak();
randomPM.demo("JS");
randomPM.grade(randomStudent, "JS");
randomPM.standUp("random channel");
randomPM.debugsCode(randomStudent, "JS");
