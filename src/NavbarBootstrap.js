import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';

class NavbarBootstrap extends Component {
    constructor(props) {
        super(props);
        this.routeChange = this.routeChange.bind(this);
        this.state = {
            isLoggedIn: false
        };

    }

 sendLogout = () =>  {
     const TOKEN = localStorage.getItem('access_token');
     if (TOKEN) {
         localStorage.removeItem('access_token');
         this.routeChange();
     }
    };



handleSubmit  = () => {

    this.sendLogout();
}


    routeChange = () => {
        let path = `/login`;
        this.props.history.push(path);
    }

    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">Lunar Mail</Navbar.Brand>
                    <Nav className="justify-content-end" activeKey="/home">
                            <Nav.Item>
                                <Nav.Link href="/login" onClick={this.handleSubmit} >Logout</Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link href="/login" onClick={this.handleSubmit} >Login</Nav.Link>
                            </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/register">Register</Nav.Link>
                        </Nav.Item>
                    </Nav>
            </Navbar>
        );
    }
}
export default NavbarBootstrap;