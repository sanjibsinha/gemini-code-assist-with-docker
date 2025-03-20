function add(a: number, b: number): number {
  return a + b;
}

let sum: number = add(1, 2);
console.log(sum); // 3

let multiply = function(a: number, b: number): number {
  return a * b;
};

let product: number = multiply(3, 4);
console.log(product); // 12

function greetOptional(name?: string): string {
  if (name) {
    return `Hello, ${name}`;
  } else {
    return 'Hello';
  }
}

let greeting: string = greetOptional();
console.log(greeting); // Hello

greeting = greetOptional('Alice');
console.log(greeting); // Hello, Alice