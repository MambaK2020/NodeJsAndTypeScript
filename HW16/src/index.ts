// Task1

function greet (name: string):string{
    return `Hi, ${name}`
};
console.log(greet('Kobe'));

//Task2

interface Person {
    name:string;
    age:number;
    city:string;
};
function printPersonInfo (person: Person):void{
    console.log(`Name:${person.name}`);
    console.log(`Age:${person.age}`);
    console.log(`City:${person.city}`);
};

const Kobe:Person={
    name:'John',
    age:27,
    city:'LA',
};
printPersonInfo(Kobe);

//Task3

function squareNumber(a:number):number{
    return a*a
};
console.log(squareNumber(8))

//Task4

function isEven (a:number): boolean {
    return a / 2 === 0? true : false
};
console.log(isEven(17))

function isEven2(a:number): boolean {
    return a / 2 === 0;
}
console.log(isEven(8))

//Task5

interface Student {
    name:string;
    grade:number;
};
function printStudentInfo (person:Student):void{
    console.log(`Name:${person.name}`);
    console.log(`Grade:${person.grade}`);
};

const student:Student={
    name:'Allen',
    grade:3,
};

const student1:Student={
    name:'Michal',
    grade:8,
}

printStudentInfo(student)
printStudentInfo(student1)

//Task6

function logMessage(message: string):void {
    console.log(message);
}

logMessage('Hi my friend!')

