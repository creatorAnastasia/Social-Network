import React from 'react';
import cl from './select.module.css';

const Select = (props)=>{
  return(
    <label>
      Your status
    <select className={cl.selec}>
  <option value="online">ON</option>
  <option value="offline">OFF</option>
    </select>
    </label>
  )
 
}
export default Select;