import React from "react"
import ReactDOM from "react-dom"
import * as auth from './util/session_api_util'

document.addEventListener("DOMContentLoaded",()=> {
  const root = document.getElementById("root");
  ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
  window.signup = auth.signup
  window.login = auth.login;
  window.logout = auth.logout;

});