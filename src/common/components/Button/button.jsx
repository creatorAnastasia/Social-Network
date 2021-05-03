import React from 'react';
import cl from './button.module.css';

const Button = ({ label, onClick })=>{
  return (
    <button onClick={onClick} className={cl.but}>{ label }</button>
  )
}
export default Button;