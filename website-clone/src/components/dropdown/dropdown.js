import React, { useState } from 'react';

function DropdownComponent() {
  const [selectedOption, setSelectedOption] = useState('10');

  const options = Array.from({ length: 203 }, (_, index) => index + 10);

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <select value={selectedOption} onChange={handleDropdownChange}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option} people
          </option>
        ))}
      </select>
    </div>
  );
}

export default DropdownComponent;