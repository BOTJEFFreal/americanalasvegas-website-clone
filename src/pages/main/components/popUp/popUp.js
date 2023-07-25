import React, { useState,useRef,useEffect } from 'react';
import './popUp.css'

const PopupComponent = (props) => {
    const popupRef = useRef();
    const [showPopup, setShowPopup] = useState(true);
  
    // useEffect(() => {
    //   const timer = setTimeout(() => {
    //     setShowPopup(true);
    //   }, 2000);
  
    //   return () => {
    //     clearTimeout(timer);
    //   };
    // }, []);
  
    // const handleOutsideClick = (e) => {
    //   if (popupRef.current && !popupRef.current.contains(e.target)) {
    //     handleClosePopup();
    //   }
    // };
  
    return (
      <div className={`popup-background ${showPopup ? 'active' : ''}`}>
          <div className="popup-content">
            <div className='popup-text'>
            <h2>Did you know we do catering?</h2>
            <p className='popup-subheading'>Whatever your occasion, however big or small, we have the perfect options to choose from.</p>
            <p className='popup-subheading-2'>Cater your birthday party, holiday party, corporate events, wedding festivities and more!</p>
            </div>
            <button className='popup-button' onClick={console.log('basic')}>Catering Packages</button>

          
            <span className='popup-close' onClick={() => props.handleClosePopup()}>x</span>
          </div>
        
      </div>
    );
  };
  
  export default PopupComponent; 