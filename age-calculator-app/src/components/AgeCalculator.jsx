// src/components/AgeCalculator.jsx

import React, { useState } from 'react';
import DateInput from './DateInput';
import { calculateAge } from '../utils/dateUtils';

/**
 * The main age calculator component.
 *
 * @returns {JSX.Element} - The rendered AgeCalculator component.
 */
function AgeCalculator() {
  // --- React Basics: ---
  // 1. `useState`: A React Hook for managing state.
  // 2. `birthDate`, `setBirthDate`: State variable and its update function.
  // 3. `age`, `setAge`: State variable for the calculated age.
  // 4. `null`: Initial age is null, means we don't have an age yet.
  // 5. Arrow function.

  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  /**
   * Handles changes to the birth date input.
   *
   * @param {object} event - The change event.
   */
  const handleBirthDateChange = (event) => {
    // --- JavaScript Basics: ---
    // 1. `event.target.value`: The new value from the input.
    // 2. `setBirthDate`: Update the state variable.
    setBirthDate(event.target.value);
    setAge(null); // Reset age when the date changes
    setErrorMessage(null);
  };

  /**
   * Calculates the age when the button is clicked.
   */
  const calculateAgeClick = () => {
    // --- JavaScript Basics: ---
    // 1. `new Date(birthDate)`: Creates a Date object from the input string.
    // 2. `try...catch`: Error handling.
    // 3. error handling: if an error is throw by the calculateAge method, this code will handle this error.
    try {
      const birthDateObj = new Date(birthDate);
      const ageResult = calculateAge(birthDateObj);
      setAge(ageResult);
    } catch (error) {
      setErrorMessage(error.message);
      setAge(null);
    }
  };

  return (
    <div className="age-calculator">
      <h1>Age Calculator</h1>
      <DateInput
        label="Birth Date"
        name="birthDate"
        value={birthDate}
        onChange={handleBirthDateChange}
      />
      <button onClick={calculateAgeClick}>Calculate Age</button>

      {errorMessage && <div className="error-message">{errorMessage}</div>}

      {/* --- JavaScript Basics (inside JSX): --- */}
      {/* 1. `&&`: Short-circuiting (only render if `age` is not null). */}
      {age && (
        <div className="age-result">
          <p>
            You are {age.years} years, {age.months} months, and {age.days} days old.
          </p>
        </div>
      )}
    </div>
  );
}

export default AgeCalculator;
