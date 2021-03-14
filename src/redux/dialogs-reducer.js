const NEW_MESSAGE_BODY = 'NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE'

const initialState = {
    dialogs:[
    { id: 1, name: 'Max'},
    {id: 2,name:'Vova'},
     {id:3, name:'Valera'},
      {id:4,name:'Valeron'}
  ],
  messages:[
    { id: 1, message: 'hi' },
    { id: 2, message: 'privet' },
    { id: 3, message: 'yo' },
    { id: 4, message: 'hello' }
  ],
  newMessageBody:""
};

const dialogsReducer = (state = initialState, action) => {
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