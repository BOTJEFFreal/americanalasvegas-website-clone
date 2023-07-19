import "./inputTag.css";
function InputTag(props) {
  
  const handleChange = (event) => {
    if(props.type ==="moneyType"){
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
      className="text-input is-empty"
      type="text"
      placeholder={props.type ==="moneyType" ? "$45"
        :props.placeholder}
      onChange={handleChange}
    ></input>
  );
}

export default InputTag;
