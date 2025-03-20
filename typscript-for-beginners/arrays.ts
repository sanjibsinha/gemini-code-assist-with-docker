let numbers: number[] = [1, 2, 3, 4, 5];
let strings: string[] = ['a', 'b', 'c', 'd', 'e'];

console.log(numbers);
console.log(strings);

// Output
// [ 1, 2, 3, 4, 5 ]
// [ 'a', 'b', 'c', 'd', 'e' ]

let ages: Array<number> = [10, 20, 30, 40, 50];
let names: Array<string> = ['John', 'Doe', 'Jane', 'Doe'];

console.log(ages);
console.log(names);

// Output   
// [ 10, 20, 30, 40, 50 ]   
// [ 'John', 'Doe', 'Jane', 'Doe' ]

// tuples
let person: [string, number, boolean] = ['John Doe', 30, true];

console.log(person);

// Output
// [ 'John Doe', 30, true ]