import * as APIUTIL from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER'
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS'


export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
})

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
})

export const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
})


export const login = (user) => dispatch => (
  APIUTIL.login(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
)


export const logout = () => dispatch => (
  APIUTIL.logout().then(user => (
  dispatch(logoutCurrentUser())
  ))
);

export const signup = (user) => dispatch => (
  APIUTIL.signup(user)
    .then(user => (dispatch(receiveCurrentUser(user))),
    err => (dispatch(reveiveErrors(err.responseJSON))
    ))
);
