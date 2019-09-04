import React, { Component } from "react";
import { Button } from "react-bootstrap";


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';

class Logout extends Component {

   sendLogout = () => {
       localStorage.removeItem('access_token');
   }

    handleSubmit = event => {
        event.preventDefault();
        this.sendLogout();
    };

    render() {
        return (
            <div className="Login container-fluid" >
                <div className="row justify-content-center">
                    <form  className="col-5 " onSubmit={this.handleSubmit}>
                        <Button
                            block
                            type="submit"
                            className="btn btn-primary" >
                            Logout
                        </Button>
                    </form>

                </div>
            </div>
        );
    }
}
export default Logout;