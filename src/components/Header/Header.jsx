import React, { useState } from 'react';
import Button from '../../common/components/Button/button';
import Modal from '../Modal/modal';
import cl from './Header.module.css';


const Header = () => {
  const [modalActive,setModalActive] = useState(false)
  return(
  <header className={`${cl.header} ${cl.activ}`}>
      <img src="https://img.icons8.com/clouds/100/000000/bookmark.png" />
      <div className={cl.signIn}>
        <Button label="Sign in" onClick={()=> setModalActive(true)} />
        <Modal active={modalActive} setActive={setModalActive} />
      </div>
    </header>
  )
}
 export default Header;