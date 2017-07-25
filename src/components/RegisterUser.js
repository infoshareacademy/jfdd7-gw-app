/**
 * Created by Tomasz on 7/22/2017.
 */
import React from "react";
import firebase from "firebase";
import {syncUser} from "../state/auth";
import {connect} from "react-redux";

import {Button, Col, FormControl, FormGroup} from "react-bootstrap";


class RegisterUser extends React.Component {
    state = {
        email: '',
        password: '',
        message: null,
        username: ''
    }

    handleUserNameChange = event => {
        this.setState({
            username: event.target.value
        })
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
        firebase.auth().createUserWithEmailAndPassword(
            this.state.email,
            this.state.password
        ).then(
            user => {
                //console.log(user)
                user.updateProfile({
                    displayName: this.props.username
                }).then(
                    () => this.props.syncUser({...user})
                )
            }
        ).then(
            ()=> this.setState({message: 'New user created'})
        )
    }

    render() {
        return (
            <div className="loginDiv">
                <form onSubmit={this.handleSubmit}>

                    <FormGroup controlId="formHorizontalUsername"
                    >


                        <Col sm={12}>
                            <FormControl
                                type="text"
                                placeholder="Nazwa użytkownika"
                                value={this.state.username}
                                onChange={this.handleUserNameChange}
                            />
                        </Col>
                    </FormGroup>

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
                            >Stwórz nowego użytkownika
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
)(RegisterUser)