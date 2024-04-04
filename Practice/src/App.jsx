import { useState } from 'react';
import './App.css';

function App() {
  const [submittedValue, setSubmittedValue] = useState(''); // State to store the submitted value

  const handleSubmit = () => {
    setSubmittedValue(submittedValue); // Update submitted value when a submission occurs
  };

  return (
    <div className='w-full bg-green-400 h-11'>

        <input
        className='h-9 bg-blue-400'
        type="text"
        placeholder='Enter Something'
        value={submittedValue}
        onChange={(e) => setSubmittedValue(e.target.value)}
      />

      <button className='h-8 w-19 p-2 m-1 bg-blue-400' onClick={handleSubmit}>
        Submit
      </button>
        
          {submittedValue && ( // Conditionally render when a value has been submitted
            <div>
              Submitted value: {submittedValue}
            </div>
          )}

        </div>

  );
}

export default App;