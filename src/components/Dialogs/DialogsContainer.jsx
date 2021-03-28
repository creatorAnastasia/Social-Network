import React from 'react';
import { connect } from 'react-redux';
import { newMessageBodyCreator, sendMessageCreator} from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs';



let mapStateToProps= (state) =>{
  return {
   dialogsPage:state.dialogsPage
  }
}
let mapDispatchToProps = (dispatch) =>{
  return {
    newMessageBody: (body)=>{
     dispatch(newMessageBodyCreator(body))
    },
    sendMessage: () =>{
     dispatch(sendMessageCreator())
    }
  }
}
const DialogsConteiner = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsConteiner;