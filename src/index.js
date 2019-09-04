import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Register from './Register.js';
import Login from "./Login";
import SimpleHelloWorld from "./SimpleHelloWorld";

const routing = (
    <Router>
        <div>
            <Route path="/" component={App} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/hello" component={SimpleHelloWorld} />
        </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
