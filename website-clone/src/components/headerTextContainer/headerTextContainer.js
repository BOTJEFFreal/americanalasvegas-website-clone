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
            {props.subheading2}{props.anchor}
          </div>
          </div>
          
        </div>
    )
}

export default HeaderTextContainer;