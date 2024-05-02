export {} // this will treat main.ts file as a module and not as a script. the module have its own scope and the script share the global scope.

let message = 'Hello World';
console.log(message);

// Variable declarations
let x = 20;
const y = 30;

// let x = 40; // error
// const y = 50; // error

// let sum; // ok
// const title; // error


// Variable types
let isAvailable: boolean = true;
let total: number;
let name: string = 'Adarsh';

let sentence: string = `My name is ${name}
I am working on TypeScript`

console.log(sentence);

let n: null = null;
let u: undefined = undefined;

// let isBool1: boolean = null; // Error: Type 'null' is not assignable to type 'boolean'.
// let myName1: string = undefined; // Error: Type 'undefined' is not assignable to type 'string'.

let isBool: boolean | null = null;
let myName: string | undefined = undefined;

let list1: number[] = [1,2,3];
let list2: Array<number> = [1,2,3];

let person1: [string, number] = ['Adarsh', 10];

enum Color { Red, Green, Blue}; // Red: 1, Green: 2, Blue: 3
let c: Color = Color.Green;
console.log(c) // logs: 1

enum Color1 { Red = 5, Green, Blue}; // Red: 5, Green: 6, Blue: 7
let d: Color1 = Color1.Green;
console.log(d) // logs: 6

let randomValue: any = 10;
randomValue = true;
randomValue = 'Adarsh';

// let myVariable: any = 10;

// console.log(myVariable.name); // run time error
// myVariable(); // run type error
// myVariable.toUpperCase(); // run time error

let myVariable: unknown = 10;

// (myVariable as string).toUpperCase(); // made the nesscery check
// my variable should be treated as a string and then the uppercase method can be applied, this can through run type errors

// function to check if the object have a name property or not
function hasName(obj: any): obj is {name: string}{
    return !!obj &&
        typeof obj === "object" && 
        "name" in obj
}

if(hasName(myVariable)){
    console.log(myVariable.name);
}


// Type inference
let a;
a = 10;
a = true;

let b = 10;
// b = true; // this throw a error

// Union of type (multitype)
let multitype: number | boolean;
multitype = 10;
multitype = true;

function add(num1: number, num2: number=0): number{
     return num1 + num2; 
}

function add2(num1: number, num2?: number): number {
    if (num2 === undefined) {
        num2 = 0; // Defaulting to 0 if undefined
    }
    return num1 + num2;
}
add(5);
add2(5);

// Functions
function fullName(person: {firstName: string, lastName: string}){
    console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
};

fullName(p);


// Interfaces

interface Person{
    firstName: string;
    lastName?: string;
}

function fullName1(person: Person){
    console.log(`${person.firstName} ${person.lastName}`)
}

let p1 = {
    firstName: 'Bruce',
};

fullName1(p1);

// Class

class Employee{
    protected employeeName: string;

    constructor(name: string) {
        this.employeeName = name;        
    }

    greet(){
        console.log(`Good Morning ${this.employeeName}`);
    }
}

let emp1 = new Employee('Adarsh');
console.log(emp1.employeeName);
emp1.greet();

class Manager extends Employee{
    constructor(managerName: string){
        super(managerName); // we pass 'managerName' that get initialized to the 'employeeName' in the 'Employee' class.
    }

    delegateWork(){
        console.log(`Manager delegating tasks ${this.employeeName}`);
    }
}

let m1 = new Manager('Bruce');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);


