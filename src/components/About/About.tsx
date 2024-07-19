import React, { useState } from 'react';

const App: React.FC = () => {
  const [firstInput, setFirstInput] = useState<string>('');
  const [secondInput, setSecondInput] = useState<string>('');
  const [combinedText, setCombinedText] = useState<string>('');

  const handleFirstInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newText = event.target.value;
    setFirstInput(newText);
    setCombinedText(newText + secondInput);
  };

  const handleSecondInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newText = event.target.value;
    setSecondInput(newText);
    setCombinedText(firstInput + newText);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{combinedText}</h1>
      <input
        type="text"
        value={firstInput}
        onChange={handleFirstInputChange}
        className="border p-2 mb-4 w-full"
        placeholder="First input"
      />
      <input
        type="text"
        value={secondInput}
        onChange={handleSecondInputChange}
        className="border p-2 w-full"
        placeholder="Second input"
      />
    </div>
  );
};

export default App;
