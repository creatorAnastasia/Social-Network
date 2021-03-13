import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer"


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
 this._state.profilePage = profileReducer(this._state.profilePage, action);
 this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
 this._callSubscriber(this._state);
 }
} ;



export default store;
//  window.store = store;