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

    demo(subject) {
        return `Today we are learning about ${subject}`
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
    }

    listSubjects() {
        return `${this.favSubjects}`;
    }

    PRAssignment(subject) {
        return `${student.name} has submitted a PR for ${subject}`
    }

    sprintChallenge(subject) {
        return `${student.name} has begun sprint challenge on ${subject}`
    }
}

const anna = new Student({
    name: 'Anna',
    location: 'Albuquerque, New Mexico',
    age: 24,
    previousBackground: 'Cake Decorator',
    className: 'WEBPT-8',
    favSubjects: [ 'CSS',
    'HTML', 'JavaScript' ]
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

console.log(anna.speak());
console.log(anna.listSubjects());