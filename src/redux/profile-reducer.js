const ADD_POST = 'ADD-POST';
const UBDATE_NEW_POST_TEXT = 'UBDATE-NEW-POST-TEXT';


 const profileReducer = (state,action) =>{
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
 export const ubdateNewPostAction = (newText) => {
   return {
     type: UBDATE_NEW_POST_TEXT,
     newText
   }
 };