import React from 'react';
import cl from './Dialogs.module.css';
import { Message, DialogsItem } from './DialogsItem/DialogsItem'

const Dialogs = (props) => {
  let state = props.dialogsPage;
  let dialogsElements = state.dialogs.map(dial => <DialogsItem name={dial.name} id={dial.id} />)
  let messagesElements = state.messages.map(mes => <Message message={mes.message} />)
  let newMessageBody = state.newMessageBody;


  let newMessageChange = (e) =>{
    let body = e.target.value;
    props.newMessageBody(body)
  }
  let sendMesClick = () =>{
    props.sendMessage();
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