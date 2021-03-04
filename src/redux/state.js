import {renderAll} from '../render'

let state = {
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
  ]
}
}

export let addPost = () =>{
  let newPost={
    id: 5,
    message: state.profilePage.newPostText,
    like:0
  }
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText='';
  renderAll(state);
}
export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  renderAll(state);
}



export default state;