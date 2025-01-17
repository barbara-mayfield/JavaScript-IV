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

    getRandomGrade(student, max) {
        console.log(`${this.name} gives ${student.name} a grade of:`);
        return Math.floor(Math.random() * Math.floor(max));
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
        return this.favSubjects;
    }

    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`
    }

    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`
    }

    graduate() {
        if(this.grade >= 70) {
            return `${this.name} is ready to graduate!`
        } else {
            return `${this.name} needs to work some more.`
        }
    }
}
const anna = new Student({
    name: 'Anna',
    location: 'Albuquerque, New Mexico',
    age: 24,
    previousBackground: 'Cake Decorator',
    className: 'WEBPT-8',
    favSubjects: ["CSS",
    "HTML", "JavaScript", "Lunch"],
    grade: 96
  });

const joel = new Student({
    name: 'Joel',
    location: 'Seattle, Washington',
    age: 31,
    previousBackground: 'Construction',
    className: 'WEBPT-8',
    favSubjects: ["React",
    "Web Applications", "Java frameworks", "Lunch"],
    grade: 78
  });

class TeamLeader extends Instructor{
    constructor(tL) {
        super(tL);
        this.gradClassName = tL.gradClassName;
        this.favInstructor = tL.favInstructor;
    }

    standUp(channel) {
        return `${this.name} announces to ${channel}, @ channel standy times!`
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
console.log(anna.listSubjects(), 'favorite subjects');
console.log(fred.grade(anna, 'HTML & CSS'));

console.log(anna.PRAssignment('JavaScript Fundamentals'));
console.log(anna.sprintChallenge('JavaScript Fundamentals'));

console.log(clarissa.standUp('webptX_clarissa'));
console.log(clarissa.debugsCode(anna, 'JavaScript Fundamentals'));

console.log(fred.getRandomGrade(anna, 100));

console.log(anna.graduate());
console.log(joel.graduate());