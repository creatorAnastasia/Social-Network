import React from 'react';
import Button from '../../common/components/Button/button';
import cl from './Header.module.css';


const Header = () => {
  return(
 <header className={`${cl.header} ${cl.activ}`}>
    <img src="https://img.icons8.com/clouds/100/000000/bookmark.png" />
    <div className={cl.signIn}>
      <Button label="Sign in" />
    </div>
  </header>
  )
}
 export default Header;