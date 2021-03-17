import { NavLink } from 'react-router-dom';
import React from 'react';
import cl from './DialogsItem.module.css';

export const DialogsItem = ({ id, name }) => {
  let path = '/dialogs/' + id;
  return (
    <div className={cl.dialog + ' ' + cl.activ}>
      <NavLink to={path}>{name}</NavLink>
    </div>)
}

export const Message = (props) => {
  return (
    <div className={cl.sms}>
      {props.message}
    </div>)
}