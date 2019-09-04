import React, { Component } from "react";
import {FormGroup, FormControl, Button} from "react-bootstrap";
import "./Register.css";
import Axios from "axios";


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';

class Register extends Component {
    constructor(props) {
        super(props);
        this.routeChange = this.routeChange.bind(this);
        this.state = {
            email: "",
            password: "",
            passwordConfirmation: ""
        }
    }

    routeChange = () => {
        let path = `/login`;
        this.props.history.push(path);
    }
    postCredencials = () => {
        Axios({
            method: 'post',
            url: 'http://localhost:8080/register',
            data: {
                email: this.state.email.toString(),
                password: this.state.password.toString()
            }
        });

    };

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        if ((this.state.password) !== (this.state.passwordConfirmation)){
            var message =document.getElementById("messageError");
            message.setAttribute("style", "display:flex")
        } else  {
            this.postCredencials();
            this.routeChange();
        }
    };




    render() {
        return (
            <div className="Register container-fluid" >

                <div className="row justify-content-center">

                <form  id="form" className="col-5 " onSubmit={this.handleSubmit}>
                    <h3 className="col-12 text-center">Sign In</h3>
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
                    <FormGroup controlId="passwordConfirmation" >
                        <label>Password Confirmation</label>
                        <FormControl
                            value={this.state.passwordConfirmation}
                            onChange={this.handleChange}
                            type="password"
                        />
                    </FormGroup>
                    <div id ="messageError" style={{ display: 'none'}} className={"text-center"}>Password and Confirmation Password are not the same.</div>
                    <Button type="submit" block >Register</Button>
                </form>
            </div>
            </div>
        );
    }
}
export default Register;