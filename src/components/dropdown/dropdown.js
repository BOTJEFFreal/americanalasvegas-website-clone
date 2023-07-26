import { useState } from "react";

import "./dropdown.css";

const generateTimeOptions = (startHour, startMinute, endHour, endMinute, interval) => {
  const timeOptions = [];

  let totalMinutes = startHour * 60 + startMinute;

  while (totalMinutes <= endHour * 60 + endMinute) {
    const hour = Math.floor(totalMinutes / 60);
    const minute = totalMinutes % 60;
    const meridiem = hour >= 12 ? 'PM' : 'AM';
    const formattedHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
    const formattedMinute = minute.toString().padStart(2, '0');
    const formattedTime = `${formattedHour}:${formattedMinute} ${meridiem}`;
    timeOptions.push(formattedTime);
    totalMinutes += interval;
  }

  return timeOptions;
};

const DropdownComponent = (props) => {
  const prefOptions = [
    { value: "Inside", label: "Inside" },
    { value: "Outside", label: "Outside" },
  ];
  const cateringOptions = [
    { value: "Pick-up", label: "Pick-up" },
    { value: "Delivery", label: "Delivery" },
    { value: "Fully Staffed", label: "Fully Staffed" },
  ];
  const occasionOptions = [
    { value: "Anniversary", label: "Anniversary" },
    { value: "Baby Shower", label: "Baby Shower" },
    { value: "Bachelor Party", label: "Bachelor Party" },
    { value: "Bachelorette Party", label: "Bachelorette Party" },
    { value: "Bar Mitzvah", label: "Bar Mitzvah" },
    { value: "Bar Mitzvah", label: "Bar Mitzvah" },
    { value: "Birthday", label: "Birthday" },
    { value: "Bridal Shower", label: "Bridal Shower" },
    { value: "Family Reunion", label: "Family Reunion" },
    { value: "Graduation", label: "Graduation" },
    { value: "Holiday Party, Business/Office/Corporate Function", label: "Holiday Party, Business/Office/Corporate Function" },
    { value: "Quinceañera", label: "Quinceañera" },
    { value: "Rehearsal Dinner", label: "Rehearsal Dinner" },
    { value: "Repast/Memorial Service Reception", label: "Repast/Memorial Service Reception" },
    { value: "Retirement", label: "Retirement" },
    { value: "Other", label: "Other" },
  ];
  const peopleOptions = Array.from({ length: 203 }, (_, index) => index + 10);
  const timeOptions = generateTimeOptions(11, 30, 21, 0, 15);


  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    console.log("Selected value:", option.value);
  };

 

  return (
    <div className="dropdown">
      <select className="dropdown-container" name="users" id="users">
      {props.typeOfDropDown === 'people' &&(
          peopleOptions.map((time, index) => (
            <option key={index} value={time}>
              {time} {props.typeOfDropDown === 'people' ? 'people' : ''}
            </option>
          ))
        )} 
        {props.typeOfDropDown === 'time' &&(
          timeOptions.map((time, index) => (
            <option key={index} value={time}>
              {time} {props.typeOfDropDown === 'people' ? 'people' : ''}
            </option>
          ))
        )}
        
        {props.typeOfDropDown === 'occasion' &&(
          occasionOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))
        )}
        {props.typeOfDropDown === 'catering' &&(
          cateringOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))
        )}
        {props.typeOfDropDown === 'pref' &&(
          prefOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))
        )}
      </select>
    </div>
  );
};

export default DropdownComponent;
