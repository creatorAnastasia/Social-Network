import React from 'react';
import cl from './button.module.css';

const Button = ({ label, onClick , type = "button" })=>{
  return (
    <button onClick={onClick} type={type}  className={cl.but}>{ label }</button>
  )
}
export default Button;