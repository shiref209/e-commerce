import React from "react";
import './custom-button.styles.scss';

const CustomButton = ({ children,isGoogleSigned, ...otherProps }) => {
    return (
      <button className={`${isGoogleSigned?'google-sign-in':''} custom-button`} {...otherProps}>
        {children}
      </button>
    )
  };

export default CustomButton;