import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import Demo from './demo.js';
import App from './Login/App.js';
import Menu from './User/user.js';



const Main = () => (
    <BrowserRouter>
        <div>
            <Route exact path="/" component={App}/>
            <Route path="/demo" component={Demo}/>
            <Route path="/user" component={Menu}/>
        </div>
    </BrowserRouter>
)

ReactDOM.render(
    <Main />,
    document.getElementById('root')
);

