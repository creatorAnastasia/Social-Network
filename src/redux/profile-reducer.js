const ADD_POST = 'ADD-POST';
const UBDATE_NEW_POST_TEXT = 'UBDATE-NEW-POST-TEXT';

const initialState = {
   posts:[
    { id: 1, message: 'hi,Nastya, it\s my first post', like: 7 },
  ],
   newPostText:''
  };


 const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:  {
    let newPost = {
      id: 5,
      message: state.newPostText,
      like: 0
    };
    let stateCopy = {
      ...state,
      posts : [...state.posts, newPost],
      newPostText : '',
    };
    // stateCopy.posts = [...state.posts];
    // stateCopy.posts.push(newPost);
    // stateCopy.newPostText = '';
    return stateCopy;
  }
    case UBDATE_NEW_POST_TEXT:{

      let stateCopy ={
        ...state,
        posts : [...state.posts],
        newPostText : action.newText
      };
    //    stateCopy.posts = [...state.posts];
    // stateCopy.newPostText = action.newText;
    return stateCopy;
}
    default:
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