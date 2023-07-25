import './imageContainer.css'
 
function ImageContainer(props){
    return(
        <div className='imageContainer' 
    style={{backgroundImage:`url(${props.imageUrl})`}}
    >
        <div className='imageContainer-heading'>
            {props.heading}
        </div>
        <button className='imageContainer-button'>
            {props.buttonText}
        </button>
    </div>
    );
    
}

export default ImageContainer;