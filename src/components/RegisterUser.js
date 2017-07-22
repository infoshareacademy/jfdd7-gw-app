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
        firebase.auth().createUserWithEmailAndPassword(
            this.state.email,
            this.state.password
        ).then(
            ()=> this.setState({message: 'New user created'})
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
                            >Stworz nowego urzytkownika
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