import './decoration.css';
const Decoration = (props)=>{
    return(
        <div className={`image-overlay ${props.top === "top" ? "top":"bottom"}`}
        ></div>

    );
}

export default Decoration;