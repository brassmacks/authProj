import { combineReducers } from "redux";

import { usersReducer } from '../reducers/users_reducer'
import { sessionReducer } from '../reducers/session_reducer'


const entitiesReducer = combineReducers({
  users: usersReducer
});

export default entitiesReducer;