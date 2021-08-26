import React, { useState } from 'react';
import Button from '../../common/components/Button/button';
import cl from './modal.module.css';

const Modal = ({ active, setActive }) => {
  const [name, setName] = useState('')
  const [pass, setPass] = useState('')

  function handleNameChange(ev) {
    setName(ev.target.value)
  }

  function handleSubmit(ev){
    ev.preventDefault();
    console.log('Controlled', {
      name,
      pass
    })
  }
  function handlePassChange(ev){
    setPass(ev.target.value)
  }
  let openRegister = () => {

  }

  return (
    <div className={`${cl.wrap} ${active ? cl.active : undefined}`}  onClick={()=> setActive(false)}>
      <div  className={`${cl.wind} ${active ? cl.active : undefined}`} onClick={e =>e.stopPropagation()}>
        <form onSubmit={handleSubmit}>
          <div className={cl.modalForm}>
            <div className={cl.input}>Login
              <div>
                <label>
                  <input type='text' value={name} onChange={handleNameChange} />
                </label>
              </div>
            </div>
            <div className={cl.input}>Password
              <div>
                <label>
                  <input type='text' value={pass} onChange={handlePassChange} />
                </label>
              </div>
            </div>
          </div>
          <div className={cl.but}>
          <Button label="Sign in" type="submit" />
          <Button label="Sign up" onClick={openRegister} />
         </div>
        
        </form>
      </div>
    </div>
  )
}
export default Modal;