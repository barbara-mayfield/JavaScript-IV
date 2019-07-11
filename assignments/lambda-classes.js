// CODE here for your Lambda Classes

class Person {
    constructor(attr) {
    this.name = attr.name;
    this.age = attr.age;
    this.location = attr.location;
    }

    speak() {
        return `Hello, my name is ${this.name}, I am from ${this.location}.`
    }
}

class Instructor extends Person{
    constructor(instAttr) {
    super(instAttr);
    this.specialty = instAttr.specialty;
    this.favLanguage = instAttr.favLanguage;
    this.catchPhrase = instAttr.catchPhrase;
    }

    demo() {
        let subject = 'Object Oriented Programming';
        return `${this.name} says, "Today we are learning about ${subject}!"`
    }

    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`
    }
}

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

class Student extends Person{
    constructor(student){
        super(student);
        this.previousBackground = student.previousBackground;
        this.className = student.className;
        this.favSubjects = student.favSubjects;
        this.currentSubject = student.currentSubject;
    }

    listSubjects() {
        return `${this.name}'s favorite subjects are ${this.favSubjects}.`;
    }

    PRAssignment() {
        return `${this.name} has submitted a PR for ${this.currentSubject}`
    }

    sprintChallenge() {
        return `${this.name} has begun sprint challenge on ${this.currentSubject}`
    }
}

const anna = new Student({
    name: 'Anna',
    location: 'Albuquerque, New Mexico',
    age: 24,
    previousBackground: 'Cake Decorator',
    className: 'WEBPT-8',
    favSubjects: [ 'CSS',
    'HTML', 'JavaScript' ],
    currentSubject: 'JavaScript Fundamentals'
  });

  const slackChannel = [
      'webpt8', 'webpt8_Clarissa'
  ]

class TeamLeader extends Instructor{
    constructor(tL) {
        super(tL);
        this.gradClassName = tL.gradClassName;
        this.favInstructor = tL.favInstructor;
        this.slackChannel = tL.slackChannel;
    }

    standUp(slackChannel) {
        return `${tL.name} announces to ${slackChannel[1]}, @ channel standy times!`
    }

    debugsCode(student, subject) {
        return `${tL.name} debugs ${student.name}'s code on ${subject}`
    }
}

const clarissa = {
    name: 'Clarissa',
    age: 30,
    location: 'Michigan',
    gradClassName: 'CS1',
    favInstructor: 'Sean',
    slackChannel: 'Clarissa (TL) Slack Channel'
}

console.log(fred);
console.log(anna);
console.log(clarissa);

console.log(fred.speak());
console.log(anna.speak());

console.log(fred.demo());
console.log(fred.grade());

console.log(anna.listSubjects());
console.log(anna.PRAssignment());
console.log(anna.sprintChallenge());