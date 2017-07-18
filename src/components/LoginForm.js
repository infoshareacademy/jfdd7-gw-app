/**
 * Created by Tomasz on 7/17/2017.
 */
import React from 'react';


import { connect } from 'react-redux';
import {FormGroup, Col, ControlLabel, FormControl} from 'react-bootstrap'


export default class LoginForm extends React.Component {

    render() {


        return (
            <div>
                <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={2}>
                        Email
                    </Col>
                    <Col sm={10}>
                        <FormControl type="email" placeholder="Email" />
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                    <Col componentClass={ControlLabel} sm={2}>
                        Password
                    </Col>
                    <Col sm={10}>
                        <FormControl type="password" placeholder="Password" />
                    </Col>
                </FormGroup>
            </div>
        )
    }
}

// LoginForm.propTypes = {
//     login: React.PropTypes.func.isRequired
// }
//
// LoginForm.contextTypes = {
//     router: React.PropTypes.object.isRequired
// }

