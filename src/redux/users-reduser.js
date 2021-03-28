
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

const initialState = {
  users: [
    // {id:1, followed:true, fullName: 'Maxim', status:'i am a boss', location:{city: 'Sochi', country: 'Russia'} },
    // {id:2, followed:false, fullName: 'Nastya', status:'i am a princess', location:{city: 'Sochi', country: 'Russia'} }
  ]
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
        users: [...state.users, ...action.users]
      }
    
    default:
      return state;
  }
}

export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })
export default usersReducer;

