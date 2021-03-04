import React from 'react';
import cl from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';




const DialogsItem = ({ id, name }) => {
  let path = '/dialogs/' + id;
  return (
  <div className={cl.dialog + ' ' + cl.activ}>
    <NavLink to={path}>{name}</NavLink>
  </div>)
} 

  const Message = (props)=>{
return(
  <div className={cl.sms}>
    {props.message}
  </div>)
  }



const Dialogs = (props) => {
  let dialogsElements = props.state.dialogs.map(dial => <DialogsItem name={dial.name} id={dial.id} />)
  let messagesElements = props.state.messages.map(mes => <Message message={mes.message} />)

  let newMessageElem = React.createRef();

  let addMes = () => {
    let text = newMessageElem.current.value;
    alert(text)
  }

  return (
  <div className={cl.dialogs}>
    <div className={cl.dialogsItems}>
      {dialogsElements}
    </div>


      <div className={cl.message}>
        {messagesElements}
      <div className={cl.newMessage}>
        <textarea ref={newMessageElem} ></textarea>
        <div>
          <button onClick = {addMes}> Send </button>
        </div>
        </div>
</div>
  </div>
  )}

export default Dialogs;