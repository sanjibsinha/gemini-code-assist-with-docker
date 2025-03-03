import React, { useState } from 'react'; //Import React and useState from react
import LoanForm from './components/LoanForm'; // Import LoanForm Component
import LoanResults from './components/LoanResults'; // Import LoanResult Component
import Header from './components/Header'; // Import Header Component
import './App.css'; // Import css file

function App() {
  // state management with react useState hook.
  const [loanData, setLoanData] = useState(null);

  // callback function to pass to LoanForm component
  const handleLoanData = (data) => {
    setLoanData(data);
  };

  return (
    <div className="App">
      <Header /> {/* Rendering Header Component */}
      <LoanForm onCalculate={handleLoanData} /> {/* Rendering LoanForm Component */}
      {loanData && <LoanResults data={loanData} />} {/* Conditional Rendering of the LoanResult Component */}
    </div>
  );
}

export default App;
