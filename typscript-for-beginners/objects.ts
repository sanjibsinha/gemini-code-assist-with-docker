let person: {
    name: string;
    age: number;
    isStudent: boolean;
} = {
    name: "John Doe",
    age: 30,
    isStudent: true,
};

console.log(person.name); // John Doe
console.log(person.age); // 30
console.log(person.isStudent); // true

interface Person {
    name: string;
    age: number;
    isStudent: boolean;
    makeSound(): void; 
}

let anotherPerson: Person = {
    name: "Jane Doe",
    age: 25,
    isStudent: false,
    makeSound() {
        console.log("Hello");
    }
};


console.log(anotherPerson.name); // Jane Doe
console.log(anotherPerson.age); // 25
console.log(anotherPerson.isStudent); // false

anotherPerson.makeSound(); // Hello