// sign up
export const signup = user => {
  $.ajax ({
    url: 'api/users',
    method: 'POST',
    data: { user }
  })
}
// login 
export const login = user => {
  $.ajax({
    url: 'api/session',
    method: 'POST',
    data: { user }
  })
}

// logout 
export const logout = () => {
  $.ajax({
    url: 'api/session',
    method: 'DELETE'
  })
} 