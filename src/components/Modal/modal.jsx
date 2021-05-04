import React from 'react';
import Button from '../../common/components/Button/button';
import cl from './modal.module.css';

const Modal = (props) => {
return (
  <div className={cl.wrap}>
    <div className={cl.wind}></div>
  <div className={cl.modalHead}></div>
  <div className={cl.modalBody}></div>
  <div className={cl.modalFooter}></div>
  </div>
)
}
export default Modal;