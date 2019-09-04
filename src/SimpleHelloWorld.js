import React, { Component } from "react";
import Axios from "axios";


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';


class SimpleHelloWorld extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jwt: "",
            text: "",

        };
    }

    getSimpleHello = async (jwt) => {

        //let secure = Axios.defaults.headers.Authorization = "Bearer " + jwt ;
        //console.log(secure);
        const response = await Axios.get('http://localhost:8080/hello',{
            headers: {
                'Authorization' : 'Bearer ' + jwt ,
            }

        });


        console.log(response.data.text)


    };

    getToken = () => {
        const TOKEN = localStorage.getItem('access_token');
        return TOKEN;
    };

    componentDidMount() {
       var jwt = this.getToken();
       this.getSimpleHello(jwt);
    }


    render() {
        return (
            <div className="Login container-fluid" >
                <div className="row justify-content-center">
                </div>
            </div>
        );
    }
}
export default SimpleHelloWorld;