import React from 'react';
import cl from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import { newMessageBodyCreator, sendMessageCreator} from '../../redux/dialogs-reducer'

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
  let state = props.store.getState().dialogsPage;
  let dialogsElements = state.dialogs.map(dial => <DialogsItem name={dial.name} id={dial.id} />)
  let messagesElements = state.messages.map(mes => <Message message={mes.message} />)
   let newMessageBody = state.newMessageBody;
  let newMessageChange = (e) =>{
    let body = e.target.value;
    props.store.dispatch(newMessageBodyCreator(body))
  }
  let sendMesClick = () =>{
    props.store.dispatch(sendMessageCreator())
  }
  return (
  <div className={cl.dialogs}>
    <div className={cl.dialogsItems}>
      {dialogsElements}
    </div>
      <div className={cl.message}>
        {messagesElements}
      <div className={cl.newMessage}>
          <div><textarea value={newMessageBody} 
                         onChange = {newMessageChange} ></textarea></div>
        <div>
          <button onClick = {sendMesClick}> Send </button>
        </div>
        </div>
</div>
  </div>
  )}

export default Dialogs;