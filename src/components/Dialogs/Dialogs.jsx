import React from 'react';
import cl from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';




const DialogsItem = (props) =>{
  let path = '/dialogs/' + props.id;
return (
  <div className={cl.dialog + ' ' + cl.activ}>
    <NavLink to={path}>{props.name}</NavLink>
  </div>)
  } 

  const Message = (props)=>{
return(
  <div className={cl.sms}>
    {props.message}
  </div>)
  }




const Dialogs = (props) => {
  let dialogs = [
    { id: 1, name: 'Max'},
    {id: 2,name:'Vova'},
     {id:3, name:'Valera'},
      {id:4,name:'Valeron'}
  ]
  let messages = [
    { id: 1, message: 'hi' },
    { id: 2, message: 'privet' },
    { id: 3, message: 'yo' },
    { id: 4, message: 'hello' }
  ]

  let dialogsElements = dialogs.map(dial => <DialogsItem name={dial.name} id={dial.id} />)
  let messagesElements = messages.map(mes => <Message message={mes.message} />)

  return (
  <div className={cl.dialogs}>
      <div className={cl.dialogsItems}>
        {dialogsElements}
    </div>

      <div className={cl.message}>
        {messagesElements}
    </div>
  </div>
  )}

export default Dialogs;