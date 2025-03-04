// src/components/DateInput.jsx

import React from 'react';

/**
 * A reusable date input component.
 *
 * @param {object} props - The component's props.
 * @param {string} props.label - The label text.
 * @param {string} props.name - The input's name attribute.
 * @param {string} props.value - The current value.
 * @param {function} props.onChange - Callback function when the value changes.
 * @returns {JSX.Element} - The rendered DateInput component.
 */
function DateInput({ label, name, value, onChange }) {
  // --- React Basics: ---
  // 1. `import React from 'react'`: Imports the React library.
  // 2. `function DateInput(...)`: A functional component.
  // 3. `props`: The data passed to the component (e.g., `label`, `name`).
  // 4. `JSX`: HTML-like syntax inside JavaScript.
  // 5. `{label}`, `{name}`, `{value}`, `{onChange}`: destructuring assignment.
  // 6. return: it returns the JSX element that will be rendered in the UI.
  return (
    <div className="date-input">
      <label htmlFor={name}>{label}</label>
      <input
        type="date"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      />
      {/* --- JavaScript Basics (inside JSX): --- */}
      {/* 1. `htmlFor`, `id`, `name`, `value`, `onChange`: HTML attributes. */}
      {/* 2. `{name}`, `{value}`, `{onChange}`: Dynamic values from `props`. */}
    </div>
  );
}

export default DateInput;
