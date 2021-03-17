import React from 'react';
import { newMessageBodyCreator, sendMessageCreator} from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs';



const DialogsContainer = (props) => {
  let state = props.store.getState().dialogsPage;

  let newMessageChange = (body) =>{
  props.store.dispatch(newMessageBodyCreator(body))
  }
  let sendMesClick = () =>{
    props.store.dispatch(sendMessageCreator())
  }
  return <Dialogs newMessageBody={newMessageChange} sendMessage={sendMesClick}
    dialogsPage= {state}/> }

export default DialogsContainer;