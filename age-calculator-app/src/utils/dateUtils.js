// src/utils/dateUtils.js

/**
 * Calculates the age in years, months, and days based on a birthdate and current date.
 *
 * @param {Date} birthDate - The date of birth.
 * @param {Date} currentDate - The date to calculate the age to (defaults to today).
 * @returns {{years: number, months: number, days: number}} - An object containing the age components.
 * @throws {Error} If the birthdate is invalid or in the future.
 */
export function calculateAge(birthDate, currentDate = new Date()) {
  // --- JavaScript Basics: ---
  // 1. `export`: Makes this function available for use in other files.
  // 2. `function`: Defines a function.
  // 3. `parameters`: `birthDate`, `currentDate` are parameters (inputs).
  // 4. `= new Date()`: Default parameter value, so we can call it without specifying currentDate.
  // 5. `/** ... */`: This is a JSDoc comment used for documentation.
  // 6. `{}`: Object literal.
  // 7. `throw new Error`: to raise an error.
  
  if (!(birthDate instanceof Date) || isNaN(birthDate)) {
    throw new Error("Invalid birth date provided.");
  }

  if (birthDate > currentDate) {
    throw new Error("Birth date cannot be in the future.");
  }

  // --- JavaScript Basics: ---
  // 1. `if`: Conditional statement.
  // 2. `instanceof`: Checks if `birthDate` is a Date object.
  // 3. `isNaN`: Checks if `birthDate` is a valid date.
  // 4. `>`: Greater than operator.

  let years = currentDate.getFullYear() - birthDate.getFullYear();
  let months = currentDate.getMonth() - birthDate.getMonth();
  let days = currentDate.getDate() - birthDate.getDate();

  // --- JavaScript Basics: ---
  // 1. `let`: Variable declaration (block-scoped).
  // 2. `getFullYear()`, `getMonth()`, `getDate()`: Date object methods.
  // 3. `-`: Subtraction operator.

  if (days < 0) {
    const previousMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
    days += previousMonth.getDate();
    months--;
  }

    // --- JavaScript Basics: ---
    // 1. `const`: Variable declaration that cannot be reassigned (block-scoped).
    // 2. += is shorthand for days = days + previousMonth.getDate()
  
  if (months < 0) {
    months += 12;
    years--;
  }

  return { years, months, days };

  // --- JavaScript Basics: ---
  // 1. `return`: Returns a value from the function.
  // 2. `{ years, months, days }`: Shorthand object property assignment (same as `{ years: years, months: months, days: days }`).
}
