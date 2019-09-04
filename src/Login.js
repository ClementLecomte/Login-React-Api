import React, { Component } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import Axios from "axios";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.routeChange = this.routeChange.bind(this);
        this.state = {
            email: "",
            password: "",
            jwtToken: ""
        };
    }

    postCredencials = async () => {
       let response = await Axios({
            method: 'post',
            url: 'http://localhost:8080/authenticate',
            data: {
                'email': this.state.email.toString(),
                'password': this.state.password.toString()
            }

        });

        var jwt = response.data.token;
        if (response.status === 200 && jwt) {
            localStorage.setItem("access_token", jwt);
            this.routeChange();
        }


        // TODO Créer un message d'erreur si les identifiants sont incorrects
        //
        //
    }

    routeChange = () => {
        let path = `/hello`;
        this.props.history.push(path);
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        this.postCredencials();
    }



    render() {
        return (
            <div className="Login container-fluid" >
                <div className="row justify-content-center">
                    <form  className="col-5 " onSubmit={this.handleSubmit}>
                        <h3 className="col-12 text-center">Log in</h3>
                        <FormGroup controlId="email" >
                            <label>Email</label>
                            <FormControl
                                autoFocus
                                type="text"
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup controlId="password" >
                            <label>Password</label>
                            <FormControl
                                value={this.state.password}
                                onChange={this.handleChange}
                                type="password"
                            />
                        </FormGroup>
                        <div id ="invalidCredential" style={{ display: 'none'}} className={"text-center"}>Invalid Credentials</div>
                        <Button
                            block
                            type="submit"
                        >
                            Login
                        </Button>
                    </form>

                </div>
            </div>
        );
    }
}
export default Login;