import React from 'react';


const CustomButton = ({onClick, light, text}) => {
  const buttonClassName=light ? 'light-btn': 'dark-btn';
  return (
    <button className={buttonClassName} onClick={onClick}>
      {text}
    </button>
  )
}

export default CustomButton;
