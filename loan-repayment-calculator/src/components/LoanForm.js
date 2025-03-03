import React, { useState } from 'react';

function LoanForm({ onCalculate }) {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page refresh

    // Basic validation (you might want more robust validation)
    if (!loanAmount || !interestRate || !loanTerm) {
      alert('Please fill in all fields.');
      return;
    }

    // Perform the calculation
    const monthlyPayment = calculateMonthlyPayment(
      parseFloat(loanAmount),
      parseFloat(interestRate) / 100,
      parseInt(loanTerm)
    );

    const totalInterest = calculateTotalInterest(
      parseFloat(loanAmount),
      parseFloat(interestRate) / 100,
      parseInt(loanTerm)
    );

    // callback function to pass data to parent component
    onCalculate({
      loanAmount: parseFloat(loanAmount),
      interestRate: parseFloat(interestRate),
      loanTerm: parseInt(loanTerm),
      monthlyPayment: monthlyPayment,
      totalInterest: totalInterest,
    });
  };

  // Helper functions for calculation
  const calculateMonthlyPayment = (loanAmount, interestRate, loanTerm) => {
    const monthlyInterestRate = interestRate / 12;
    const numberOfPayments = loanTerm * 12;
    const numerator = monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments);
    const denominator = Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1;
    return (loanAmount * (numerator / denominator)).toFixed(2); // Round to 2 decimal places
  };

  const calculateTotalInterest = (loanAmount, interestRate, loanTerm) => {
    const monthlyPayment = calculateMonthlyPayment(loanAmount, interestRate, loanTerm);
    return (monthlyPayment * loanTerm * 12 - loanAmount).toFixed(2);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="loanAmount">Loan Amount:</label>
        <input
          type="number"
          id="loanAmount"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="interestRate">Interest Rate (%):</label>
        <input
          type="number"
          id="interestRate"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="loanTerm">Loan Term (years):</label>
        <input
          type="number"
          id="loanTerm"
          value={loanTerm}
          onChange={(e) => setLoanTerm(e.target.value)}
        />
      </div>
      <button type="submit">Calculate</button>
    </form>
  );
}

export default LoanForm;
