/**
 * Created by tomaszmoroz on 21.07.17.
 */
import React from 'react'
import { connect } from 'react-redux'
import LoginPage from "./LoginPage";
// import SignInForm from './components/SignInForm'
// import SignUpForm from './components/SignUpForm'

const Auth = ({ user, children }) => (
  user !== null ?
    children :
    <div>
      <LoginPage/>
    </div>
)

export default connect(
  state => ({
    user: state.auth.user
  })
)(Auth)