import React from 'react';
import cl from './toggle.module.css'

const Toggle = ({ onClick })=>{
  return (
    <div onClick={onClick} className={cl.center}>
      <input value={true} type='checkbox' />
    </div>
  )
}
export default Toggle;