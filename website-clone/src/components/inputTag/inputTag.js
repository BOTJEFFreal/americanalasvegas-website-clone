import "./inputTag.css";
import { useRef, useState } from "react";
function InputTag(props) {
  const [inputValue, setInputValue] = useState(null);

  const handleChange = (event) => {
    setInputValue(event.target.value);
    if (props.type === "moneyType") {
      const { value } = event.target;
      const sanitizedValue = value.replace(/[^0-9$]/g, ""); // Remove any non-digit and non-$ characters
      const formattedValue = sanitizedValue.startsWith("$")
        ? sanitizedValue
        : `$${sanitizedValue}`; // Add $ at the beginning if not already present
      event.target.value = formattedValue; // Update the input value
    }
  };
  return (
    <input
      className={`text-input ${inputValue === '' ? 'empty-input' : ''}`}
      type="text"
      placeholder={props.type === "moneyType" ? "$45" : props.placeholder}
      onClick={handleChange}
      onChange={handleChange}

    ></input>
  );
}

export default InputTag;
