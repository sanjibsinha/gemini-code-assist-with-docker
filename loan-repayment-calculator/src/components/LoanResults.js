import React from 'react';

function LoanResults({ data }) {
  return (
    <div>
      <h2>Loan Repayment Results</h2>
      <p>Loan Amount: ${data.loanAmount.toFixed(2)}</p>
      <p>Interest Rate: {data.interestRate.toFixed(2)}%</p>
      <p>Loan Term: {data.loanTerm} years</p>
      <p>Monthly Payment: ${data.monthlyPayment}</p>
      <p>Total Interest: ${data.totalInterest}</p>
    </div>
  );
}

export default LoanResults;
