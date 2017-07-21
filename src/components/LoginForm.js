/**
 * Created by Tomasz on 7/17/2017.
 */
import React from 'react';
import firebase from 'firebase'
import {syncUser} from '../state/auth'
import {connect} from 'react-redux'

import {FormGroup, Col, FormControl, Button} from 'react-bootstrap'


class LoginForm extends React.Component {
  state = {
    email: '',
    password: '',
    message: null
  }

  handleEmailChange = event => {
    this.setState({
      email: event.target.value
    })
  }

  handlePasswordChange = event => {
    this.setState({
      password: event.target.value
    })
  }

  handleSubmit = event => {

    event.preventDefault()
    firebase.auth().signInWithEmailAndPassword(
      this.state.email,
      this.state.password
    ).then(
      () => this.setState({message: 'User logged in'})
    ).catch(
      error => this.setState({message: error.message})
    )
  }

  handleSubmitNewUs = event => {
    event.preventDefault()
    firebase.auth().createUserWithEmailAndPassword(
      this.state.email,
      this.state.password
    ).then(
      user => {
        //console.log(user)
        user.updateProfile({
          displayName: 'Janusz Kowalski'
        }).then(
          () => this.props.syncUser({...user})
        )
      }
    )
  }

  render() {
    return (
      <div className="loginDiv">
        <form onSubmit={this.handleSubmit}>
          <div className="loginLogo"></div>
          <FormGroup controlId="formHorizontalEmail"
          >
            <p>{this.state.message}</p>

            <Col sm={12}>
              <FormControl
                type="text"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleEmailChange}
              />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">

            <Col sm={12}>
              <FormControl
                type="text"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handlePasswordChange}
              />
              <Button block
                      bsStyle="warning"
                      type="submit"
              >Login
              </Button>
            </Col>


          </FormGroup>

        </form>
        <h2>Zarejestruj nowego uzytkownika</h2>
        <form onSubmit={this.handleSubmitNewUs}>
          <div className="loginLogo"></div>
          <FormGroup controlId="formHorizontalEmail"
          >
            <p>{this.state.message}</p>

            <Col sm={12}>
              <FormControl
                type="text"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleEmailChange}
              />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">

            <Col sm={12}>
              <FormControl
                type="text"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handlePasswordChange}
              />
              <Button block
                      bsStyle="warning"
                      type="submit"
              >Login
              </Button>
            </Col>


          </FormGroup>

        </form>
      </div>
    )
  }
}

export default connect(
  null,
  dispatch => ({
    syncUser: (user) => dispatch(syncUser(user))
  })
)(LoginForm)
