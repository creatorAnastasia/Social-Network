import React from 'react';
import cl from './Header.module.css';


const Header = () => {
  return(
 <header className={`${cl.header} ${cl.activ}`}>
    <img src="https://img.icons8.com/clouds/100/000000/bookmark.png" />
  </header>
  )
}
 export default Header;