"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var message = 'Hello World';
console.log(message);
// Variable declarations
var x = 20;
var y = 30;
// let x = 40; // error
// const y = 50; // error
// let sum; // ok
// const title; // error
// Variable types
var isAvailable = true;
var total;
var name = 'Adarsh';
var sentence = "My name is ".concat(name, "\nI am working on TypeScript");
console.log(sentence);
var n = null;
var u = undefined;
// let isBool1: boolean = null; // Error: Type 'null' is not assignable to type 'boolean'.
// let myName1: string = undefined; // Error: Type 'undefined' is not assignable to type 'string'.
var isBool = null;
var myName = undefined;
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var person1 = ['Adarsh', 10];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
; // Red: 1, Green: 2, Blue: 3
var c = Color.Green;
console.log(c); // logs: 1
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 5] = "Red";
    Color1[Color1["Green"] = 6] = "Green";
    Color1[Color1["Blue"] = 7] = "Blue";
})(Color1 || (Color1 = {}));
; // Red: 5, Green: 6, Blue: 7
var d = Color1.Green;
console.log(d); // logs: 6
var randomValue = 10;
randomValue = true;
randomValue = 'Adarsh';
// let myVariable: any = 10;
// console.log(myVariable.name); // run time error
// myVariable(); // run type error
// myVariable.toUpperCase(); // run time error
var myVariable = 10;
// (myVariable as string).toUpperCase(); // made the nesscery check
// my variable should be treated as a string and then the uppercase method can be applied, this can through run type errors
// function to check if the object have a name property or not
function hasName(obj) {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj;
}
if (hasName(myVariable)) {
    console.log(myVariable.name);
}
// Type inference
var a;
a = 10;
a = true;
var b = 10;
// b = true; // this throw a error
// Union of type (multitype)
var multitype;
multitype = 10;
multitype = true;
function add(num1, num2) {
    if (num2 === void 0) { num2 = 0; }
    return num1 + num2;
}
function add2(num1, num2) {
    if (num2 === undefined) {
        num2 = 0; // Defaulting to 0 if undefined
    }
    return num1 + num2;
}
add(5);
add2(5);
// Functions
function fullName(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
var p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
};
fullName(p);
function fullName1(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
var p1 = {
    firstName: 'Bruce',
};
fullName1(p1);
// Class
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning ".concat(this.employeeName));
    };
    return Employee;
}());
var emp1 = new Employee('Adarsh');
console.log(emp1.employeeName);
emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this; // we pass 'managerName' that get initialized to the 'employeeName' in the 'Employee' class.
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating tasks ".concat(this.employeeName));
    };
    return Manager;
}(Employee));
var m1 = new Manager('Bruce');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
