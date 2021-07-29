import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_actions";



// const defaultState = {id: null}
// I think that we use _nullUser as a way to blank the current user
const _nullUser = Object.freeze({
  id: null
})

const sessionReducer = (oldState = defaultState, action) => {
  Object.freeze(oldState)
  const newState = Object.assign({}, oldState);
  
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign(newState, action.currentUser.id);
    case LOGOUT_CURRENT_USER:
      return _nullUser;  
    default:
      return oldState;
  }
}

export default sessionReducer