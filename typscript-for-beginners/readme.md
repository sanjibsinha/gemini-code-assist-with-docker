# Detailed Lessons to Get Acquainted with TypeScript

Think of TypeScript as an extension of JavaScript that adds **types**. These types help you write more robust and understandable code by catching errors early in the development process.

**Lesson 1: What is TypeScript?**

* **TypeScript is a Superset of JavaScript:** This means any valid JavaScript code is also valid TypeScript code. However, TypeScript adds extra features, primarily static typing.
* **Static Typing:** In TypeScript, you can specify the type of data a variable, function parameter, or function return value is expected to hold (e.g., number, text, true/false). This allows the TypeScript compiler to check for type-related errors *before* you run your code in a browser.
* **Benefits of TypeScript:**
    * **Early Error Detection:** Catches errors during development, reducing runtime issues.
    * **Improved Code Readability:** Explicit types make the code easier to understand.
    * **Better Code Maintainability:** Easier to refactor and maintain larger codebases.
    * **Enhanced Developer Experience:** Features like autocompletion and type checking in code editors improve productivity.
* **TypeScript needs to be Compiled:** Browsers understand JavaScript, not TypeScript directly. So, TypeScript code needs to be "compiled" into JavaScript code before it can run in a browser.

**Lesson 2: Basic Types in TypeScript**

TypeScript has several built-in types to represent different kinds of data:

* **`number`:** Represents numeric values (both integers and floating-point numbers).

    ```typescript
    let age: number = 30;
    let price: number = 99.99;
    ```

* **`string`:** Represents textual data.

    ```typescript
    let name: string = "Alice";
    let message: string = 'Hello!';
    ```

* **`boolean`:** Represents true or false values.

    ```typescript
    let isLoggedin: boolean = true;
    let hasPermission: boolean = false;
    ```

* **`null` and `undefined`:** These are special types representing the absence of a value. By default, they are subtypes of all other types, meaning you can assign `null` or `undefined` to a `number` or `string` variable. However, you can configure TypeScript for stricter null checking.

    ```typescript
    let value1: null = null;
    let value2: undefined = undefined;
    ```

* **`any`:** This type disables type checking. It's useful when you don't know the type of a value or when you're migrating from JavaScript. Try to avoid using `any` as much as possible to leverage the benefits of TypeScript.

    ```typescript
    let something: any = "This can be a string";
    something = 123; // No error
    ```

* **`void`:** This type represents the absence of a return value from a function.

    ```typescript
    function greet(name: string): void {
        console.log(`Hello, ${name}!`);
        // No return statement
    }
    ```

**Lesson 3: Variables and Declarations**

In TypeScript (and modern JavaScript), you declare variables using `let` and `const`:

* **`let`:** Used for variables whose value might change.

    ```typescript
    let count: number = 0;
    count = 1; // Allowed
    ```

* **`const`:** Used for variables whose value should not be reassigned after initialization.

    ```typescript
    const PI: number = 3.14159;
    // PI = 3.14; // Error: Cannot reassign constant 'PI'.
    ```

You can explicitly specify the type of a variable using a colon followed by the type (type annotation):

```typescript
let myVariable: string = "Initial value";
```

If you don't provide a type annotation, TypeScript can often infer the type based on the initial value (type inference):

```typescript
let anotherVariable = 10; // TypeScript infers the type as 'number'
```

**Lesson 4: Functions in TypeScript**

You can define functions in TypeScript similar to how you might see in other programming languages:

* **Named Functions:**

    ```typescript
    function add(a: number, b: number): number {
        return a + b;
    }

    let sum: number = add(5, 3);
    console.log(sum); // Output: 8
    ```

    * We specify the type of each parameter (`a: number`, `b: number`).
    * We specify the return type of the function after the parentheses (`): number`).

* **Anonymous Functions:**

    ```typescript
    let multiply = function(x: number, y: number): number {
        return x * y;
    };

    let product: number = multiply(4, 6);
    console.log(product); // Output: 24
    ```

* **Optional Parameters:** You can make function parameters optional by adding a question mark `?` after the parameter name. Optional parameters must come after required parameters.

    ```typescript
    function greetOptional(name?: string): void {
        if (name) {
            console.log(`Hello, ${name}!`);
        } else {
            console.log("Hello there!");
        }
    }

    greetOptional("Bob"); // Output: Hello, Bob!
    greetOptional();      // Output: Hello there!
    ```

**Lesson 5: Objects and Interfaces**

* **Objects:** Objects in TypeScript are collections of key-value pairs. You can define the structure of an object using an object literal or an interface.

    ```typescript
    let person: { name: string; age: number } = {
        name: "Charlie",
        age: 25,
    };

    console.log(person.name); // Output: Charlie
    console.log(person.age);  // Output: 25
    ```

* **Interfaces:** An interface is a contract that defines the structure of an object. It specifies the names and types of the properties an object should have.

    ```typescript
    interface Animal {
        name: string;
        sound: string;
        makeSound(): void; // Method signature
    }

    let dog: Animal = {
        name: "Buddy",
        sound: "Woof!",
        makeSound: function() {
            console.log(this.sound);
        },
    };

    dog.makeSound(); // Output: Woof!
    ```

    * We define an `Animal` interface with properties `name` (string), `sound` (string), and a method `makeSound` that takes no arguments and returns nothing (`void`).
    * The `dog` object must adhere to the structure defined by the `Animal` interface.

**Lesson 6: Arrays and Tuples**

* **Arrays:** Arrays in TypeScript are collections of values of the same type.

    ```typescript
    let numbers: number= [1, 2, 3, 4, 5];
    let names: string= ["Eve", "Frank", "Grace"];
    ```

    You can also use a generic type for arrays:

    ```typescript
    let ages: Array<number> = [20, 22, 25];
    ```

* **Tuples:** Tuples are fixed-size arrays where each element can have a specific type.

    ```typescript
    let personInfo: [string, number, boolean] = ["Henry", 35, true];

    console.log(personInfo[0]); // Output: Henry
    console.log(personInfo[1]); // Output: 35
    console.log(personInfo[2]); // Output: true
    ```

    * Here, `personInfo` is a tuple with three elements: a string, a number, and a boolean, in that specific order.

**Lesson 7: Classes**

Classes in TypeScript (and modern JavaScript) are blueprints for creating objects. They can contain properties (data) and methods (functions).

```typescript
class Car {
    model: string;
    year: number;

    constructor(model: string, year: number) {
        this.model = model;
        this.year = year;
    }

    displayInfo(): void {
        console.log(`Model: ${this.model}, Year: ${this.year}`);
    }
}

let myCar = new Car("Sedan", 2023);
myCar.displayInfo(); // Output: Model: Sedan, Year: 2023
```

* We define a `Car` class with properties `model` (string) and `year` (number).
* The `constructor` is a special method that gets called when you create a new instance of the class using the `new` keyword.
* The `displayInfo` method is a function associated with the `Car` class.
