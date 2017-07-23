/**
 * Created by Tomasz on 7/17/2017.
 */
import React from 'react';
import LoginForm from './LoginForm';
import RegisterUser from './RegisterUser'
import {Button, Modal} from 'react-bootstrap'

export default  class LoginPage extends React.Component {

    state = {
        showLogin: false,
        showRegister: false
    }

    render() {

        const showLogin = {
            'display': this.state.showLogin ? 'block' : 'none'
        }

        const showRegister = {
            'display': this.state.showRegister ? 'block' : 'none'
        }

        const showL = () => {
            this.setState({ showLogin: !this.state.showLogin })
        }

        const showR = () => {
            this.setState({ showRegister: !this.state.showRegister })
        }

        return (
            <div className="row">
                <div className="loginLogo"></div>
                <div className="col-md-4 col-md-offset-4 ">
                <div>
                    <Button
                        block
                        bsStyle="warning"
                        className="horizontal"
                        onClick={showL}
                    >Panel logowania</Button>

                    <Button
                        block
                        bsStyle="warning"
                        className="horizontal"
                        onClick={showR}
                    >Załóż konto</Button>
                </div>


                    <div style={showLogin}>
                        {<LoginForm />}
                    </div>


                    <div style={showRegister}>
                        <RegisterUser/>
                    </div>
                </div>
            </div>
        );
    }
}

