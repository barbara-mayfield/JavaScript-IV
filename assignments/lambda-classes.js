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
        return `${this.name} says, "Today we are learning about ${subject}!"`
    }

    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}.`
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
        this.favSubjects.forEach(index => console.log(index));
    }

    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`
    }

    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`
    }
}

const anna = new Student({
    name: 'Anna',
    location: 'Albuquerque, New Mexico',
    age: 24,
    previousBackground: 'Cake Decorator',
    className: 'WEBPT-8',
    favSubjects: ["CSS",
    "HTML", "JavaScript", "Lunch"]
  });

  const slackChannel = [
      'webpt8', 'webpt8_Clarissa'
  ]

class TeamLeader extends Instructor{
    constructor(tL) {
        super(tL);
        this.gradClassName = tL.gradClassName;
        this.favInstructor = tL.favInstructor;
    }

    standUp(channel) {
        return `${tL.name} announces to ${channel}, @ channel standy times!`
    }

    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
}

const clarissa = new TeamLeader({
    name: 'Clarissa',
    age: 30,
    location: 'Michigan',
    gradClassName: 'CS1',
    favInstructor: 'Sean',
});

console.log(fred);
console.log(anna);
console.log(clarissa);

console.log(fred.speak());
console.log(fred.demo('JavaScript Fundamentals'));

console.log(anna.speak());
console.log(anna.listSubjects());
console.log(fred.grade(anna, 'HTML & CSS'));

console.log(anna.PRAssignment('JavaScript Fundamentals'));
console.log(anna.sprintChallenge('JavaScript Fundamentals'));

console.log(clarissa.debugsCode(anna, 'JavaScript Fundamentals'));