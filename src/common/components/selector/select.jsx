import React from 'react';
import cl from './select.module.css';

const Select = (props)=>{
  return(
    <label>
      <div className={cl.wrap}>
      <div className={cl.text}>Your status</div>
    <select className={cl.selec}>
  <option value="online">ONLINE</option>
  <option value="offline">OFFLINE</option>
  <option value="offline">отошел</option>
    </select>
    </div>
    </label>
  )
 
}
export default Select;