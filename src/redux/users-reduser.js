import axios from "axios";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

const initialState = {
  users: []
};

const usersReducer = (state = initialState, action) => {
  switch (action.type){
    case FOLLOW :
      return {
        ...state,
        users: state.users.map(us => {
          if (us.id===action.userId) {
            return {
              ...us,
              followed: true
            }
          }
          return us
        })
      }
      
    case UNFOLLOW :
      return {
        ...state,
        users: state.users.map(us => {
          if (us.id === action.userId) {
            return {
              ...us,
              followed: false
            }
          }
          return us
        })
      }
    case SET_USERS:
      return {
        ...state,
        users: [...action.users]
      }
    
    default:
      return state;
  }
}

export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const loadUsersAC = () => {
  return (dispatch) => axios.get('https://social-network.samuraijs.com/api/1.0/users')
    .then(response => {
      dispatch(setUsersAC(response.data.items))
    })
  }
export const setUsersAC = (users) => ({ type: SET_USERS, users })
export default usersReducer;

