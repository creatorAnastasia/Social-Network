import React from 'react';
import cl from './button.module.css';

const Button = ({ label })=>{
  return(
    <button className={cl.but}>{ label }</button>
  )
 
}
export default Button;