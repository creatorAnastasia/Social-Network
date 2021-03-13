

let store = {
  _state: {
   profilePage: {
   posts:[
    { id: 1, message: 'hi', like: 5 },
    { id: 2, message: 'hi,Nastya, it\s my first post', like: 7 },
  ],
   newPostText:'newww'
  }
,

 dialogsPage: {
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
}
},
 _callSubscriber() {
   console.log('changed')
 },
getState(){
  return this._state
},
subscribe(observer) {
  this._callSubscriber = observer;
},
dispatch(action){
  console.log(action)
  console.log(this._state)
  if (action.type === ADD_POST) {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      like: 0
    }
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  } else if (action.type === UBDATE_NEW_POST_TEXT) {
    this._state.profilePage.newPostText = action.newText;
    this._callSubscriber(this._state);
  } else if (action.type === NEW_MESSAGE_BODY){
    this._state.dialogsPage.newMessageBody = action.body;
    this._callSubscriber(this._state);
  } else if (action.type === SEND_MESSAGE) {
    let body = this._state.dialogsPage.newMessageBody;
     this._state.dialogsPage.newMessageBody='';
     this._state.dialogsPage.messages.push({id:5,message:body});
    this._callSubscriber(this._state);
  }
 }
} ;


const ADD_POST = 'ADD-POST';
const UBDATE_NEW_POST_TEXT ='UBDATE-NEW-POST-TEXT';
const NEW_MESSAGE_BODY = 'NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND-MESSAGE'


 export const addPostAction = () => {
   return {type: ADD_POST}
 } ;
 export const ubdateNewPostAction = (newText) => {
   return {type: UBDATE_NEW_POST_TEXT,newText}
 };
  export const sendMessageCreator = () => {
    return {type: SEND_MESSAGE }
};
  export const newMessageBodyCreator = (body) => {
    return {type: NEW_MESSAGE_BODY, body}
}

export default store;
//  window.store = store;