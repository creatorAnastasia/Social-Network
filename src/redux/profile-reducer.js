const ADD_POST = 'ADD-POST';
const UBDATE_NEW_POST_TEXT = 'UBDATE-NEW-POST-TEXT';

const initialState = {
   posts:[
    { id: 1, message: 'hi', like: 5 },
    { id: 2, message: 'hi,Nastya, it\s my first post', like: 7 },
  ],
   newPostText:'newww'
  };


 const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
    let newPost = {
      id: 5,
      message: state.newPostText,
      like: 0
    };
    state.posts.push(newPost);
    state.newPostText = '';
    return state;
    case UBDATE_NEW_POST_TEXT:
    state.newPostText = action.newText;
    return state;
    default :
    return state;
  } 

}
export default profileReducer;

 export const addPostAction = () => {
   return {
     type: ADD_POST
   }
 };
 export const ubdateNewPostActionCreator = (newText) => {
   return {
     type: UBDATE_NEW_POST_TEXT,
     newText
   }
 };