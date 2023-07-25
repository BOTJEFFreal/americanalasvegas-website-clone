import './headerTextContainer.css'

function HeaderTextContainer(props){
    return(
        <div class="main-heading">
          <div className="main-heading-container">
          <div className="main-heading-text">{props.heading}</div>
          <div class="sub-heading">
            {props.subheading}
          </div> 
          <div class="sub-heading">
            {props.subheading2}<span className='anchor'>{props.anchor}</span>
          </div>
          </div>
          
        </div>
    )
}

export default HeaderTextContainer;