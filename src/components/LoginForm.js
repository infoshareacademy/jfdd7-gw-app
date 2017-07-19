/**
 * Created by Tomasz on 7/17/2017.
 */
import React from 'react';



import {FormGroup, Col, ControlLabel, FormControl, Button} from 'react-bootstrap'


export default class LoginForm extends React.Component {

    render() {


        return (
            <div>
                <div className="loginLogo"></div>
                <FormGroup controlId="formHorizontalEmail">

                    {/*<Col componentClass={ControlLabel} sm={2}>*/}
                        {/*Email*/}
                    {/*</Col>*/}
                    <Col sm={12}>
                        <FormControl type="email" placeholder="Email" />
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                    {/*<Col componentClass={ControlLabel} sm={2}>*/}
                        {/*Password*/}
                    {/*</Col>*/}
                    <Col sm={12}>
                        <FormControl type="password" placeholder="Password" />
                        <Button block
                                bsStyle="warning"
                        >Login
                        </Button>
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

