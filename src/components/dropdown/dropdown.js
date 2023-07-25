import { useState } from "react";
import Select from 'react-select';

import './dropdown.css'

const DropdownComponent = () => {
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    console.log('Selected value:', option.value);
  };

  return (
    <div className="dropdown" >
     <select className="dropdown-container" name="users" id="users">
         <option value="cindy">Cindy</option>
         <option value="tom">Tom</option>
         <option value="paul">Paul</option>
         <option value="miley">Miley</option>
      </select>
</div>
  );
};

export default DropdownComponent;