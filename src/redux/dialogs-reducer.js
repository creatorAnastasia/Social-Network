const NEW_MESSAGE_BODY = 'NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE'

const dialogsReducer = (state,action) =>{
  switch (action.type){
    case NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
      case SEND_MESSAGE:
     let body = state.newMessageBody;
         state.newMessageBody = '';
         state.messages.push({id: 5, message: body});
         return state;
         default:
           return state;
  }
}

export default dialogsReducer;

export const sendMessageCreator = () => {
  return {
    type: SEND_MESSAGE
  }
};
export const newMessageBodyCreator = (body) => {
  return {
    type: NEW_MESSAGE_BODY,
    body
  }
}