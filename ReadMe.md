# TypeScript

## Environment setup
- Install node js
- To check the node js version installed in your system type `node -v` in the command prompt
- Install TypeScript `npm install -g typescript`
- To check the TypeScript version installed in your system type `tsc -v` in the command prompt

## Getting started
- Create a file *main.ts* and write your code.
- Open the terminal *ctrl + `*
- Run the code usung the command `tsc main.ts` the terminal (command prompt) of your browser. The command generates a *main.js* file that contains the equivalent code in JavaScript.
- Run the script using the command `node main.js`
- To automatically recompile the TS file whenever there is a change run the command `tsc main --watch`

## Variable declarations
- TypeScript encourages *let* and *const* for variable declaration.
- Before ES6 (2015), JavaScript variables had only Global Scope and Function Scope. ES6 introduced two important new JavaScript keywords: let and const . These two keywords provide Block Scope in JavaScript.
- You cannot redeclear let and const variable in same scope more then 1 time.
- let declaration can be done without initialization.
- const declaration always require an initialization.

## Variable types
- In TypeScript we can assign a type to the variable. ```let name: string = 'Adarsh';```
- We can also use template strings. Template strings can have multiple lines and have embeded expressions. ```let sentence: string = `My name is ${name}.```
```I am working on TypeScript;```

There are two major benefits of assigning type to a variable:
**Static type checking:** If you have already assigned string type to *name*, you cannot assign any other type value like a boolean value to that variable.
**Intellisense:** The intellisense can suggest you the methods associated with that particular type.

Starting with TypeScript 2.0, the default behavior changed with the introduction of "strict null checks." When "strict null checks" are enabled, null and undefined are treated as separate types that are not automatically assignable to other types.

**Strict Null Checks:** With "**strict null checks**" *null* and *undefined* are not subtypes of number, string, boolean, or other primitive types. To allow a variable to be null or undefined, you need to explicitly use union types, such as *string | null* or *boolean | undefined*.
```let isBool: boolean = null; // Error: Type 'null' is not assignable to type 'boolean'.```
```let myName: string = undefined; // Error: Type 'undefined' is not assignable to type 'string'.```

**Non-strict Null Checks:** If "**strict null checks**" are disabled, *null* and *undefined* are considered subtypes of other types, allowing implicit assignment. This is similar to the behavior in older versions of TypeScript, but it's discouraged due to the risk of runtime errors.
```let isBool: boolean | null = null; // No error```
```let myName: string | undefined = undefined; // No error```

There are two syntaxes for declaring an *Array* type:
```let list1: number[] = [1,2,3];```
```let list2: Array<number> = [1,2,3];```

For array of mixed type we have *Tuples*:
```let person1: [string, number] = ['Adarsh', 10];```
The number of elements in the tuples are fixed.

*Enums* can useful to give more friendly name to a set of numeric values (we can also create enums of string values).
```enum Color { Red, Green, Blue}; // Red: 1, Green: 2, Blue: 3 ```
```enum Color1 { Red = 5, Green, Blue}; // Red: 5, Green: 6, Blue: 7```

If the expected value to a variable is not determined, make use of *Any* type. 
```let randomValue: any = 10;```
```randomValue = true;```
```randomValue = 'Adarsh';```
The any type is the most capable type in the TypeScript. It encompasses values of every possible type and doesn't force developer to do any checking before we try to call access any properties on these values.
For the following lines of code the type script donot through any build time errors:
```let myVariable: any = 10;```
```myVariable.name;```
```myVariable();```
```myVariable.toUpperCase();```
To tackle this issue TypeScript 3.0 inroduced a new type called *unknown*.

Unknown type is similar to any type. Any value is assignable to type unknown. However you can't access any properties off of an unknown type, nor can you call or construct them.
We need to do type assertion if we replace any with unknown. Type assertion is similar to typecasting in other languages.
```let myVariable: unknown = 10;```
```(myVariable as string).toUpperCase(); // made the nesscery check```
```// my variable should be treated as a string and then the uppercase method can be applied```
When you use type assertions like (myVariable as string), you’re telling TypeScript to treat the variable as if it's a specific type, even if it might not be. This allows you to bypass type checks and can lead to errors if the underlying type doesn't match the asserted type.

It is also possible to have user defined typeguard.
```// function to check if the object have a name property or not```
```function hasName(obj: any): obj is {name: string}{```
```    return !!obj &&```
```        typeof obj === "object" && ```
```        "name" in obj```
```}```

```if(hasName(myVariable)){```
```    console.log(myVariable.name);```
```}```

*Type inference* takes place while initializing the variable and not all the time.
```let a;```
```a = 10;```
```a = true;```

```let b = 10;```
```b = true; // this throw a error```

A variable can also have union of types
```let multitype: number | boolean;```
```multitype = 10;```
```multitype = true;```
Union of type have following major advantages over any type:
- Restricted to the specified types.
- Intelligence support which is not available for any type.

## Functions
- We have static type checking for the function parameters
- In TypeScript, intellisense tell the types of parameter acceped and returned by the function.
```function add(num1: number, num2: number): number{   ```
```     return num1 + num2;```
```}```

- In TS every parameter is assumed to be required by default.
- By appending *?* at the end of a parameter name the parameter can be made optional. The optional parameter will have the type as *number|undefined*

```function add(num1: number, num2?: number): number {```
```    if (num2 === undefined) {```
```        num2 = 0; // Defaulting to 0 if undefined```
```    }```
```    return num1 + num2;```
```}```

**Note:** The optional parameters should always be after the required parameter in the function arguments.

- Default parameters are like optional parameters with a set value instead of undefined

```function add(num1: number, num2: number=0): number{```
```     return num1 + num2; ```
```}```

We can also pass objects as a function parameters
```function fullName(person: {firstName: string, lastName: string}){```
```    console.log(`${person.firstName} ${person.lastName}`);```
```}```

```let p = {```
```    firstName: 'Bruce',```
```    lastName: 'Wayne'```
```};```

```fullName(p);```


## Interfaces

If the function will have a lot of parameter and same set of parameters will be used by multiple functions. This will make the code less maintainable. The solution to this can be interfaces.
```interface Person{```
```    firstName: string;```
```    lastName?: string;```
```}```

```function fullName1(person: Person){```
```    console.log(`${person.firstName} ${person.lastName}`)```
```}```

```let p1 = {```
```    firstName: 'Bruce',```
```};```

```fullName1(p1);```

## Class
In plain JS (before ES6) there was no concept of classes and inheritance was using prototypal inheritance, which is kind of a strange concept to get used to for people from OOPS background.
```class Employee{```
```    employeeName: string;```

```    constructor(name: string) {```
```        this.employeeName = name;```       
```    }```

```    greet(){```
```        console.log(`Good Morning ${this.employeeName}`);```
```    }```
```}```

- With class we can have class based inheritance. For inheritance we use *extends* keyword.
- We use *super()* keyword to call the base class constructor.
```class Manager extends Employee{```
```    constructor(managerName: string){```
```        super(managerName); // we pass 'managerName' that get initialized to the 'employeeName' in the 'Employee' class.```
```    }```

```    delegateWork(){```
```        console.log(`Manager delegating tasks`);```
```    }```
```}```

## Access modifier
- Default - Public
