import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import Demo from './demo.js';
import Applogin from './Login/App.js';
import Menu from './User/user.js';
import MenuProducer from './Producer/Producer.js';
import combobox_state from './User/combobox_state.js';




const Main = () => (
    <BrowserRouter>
        <div>
            <Route exact path="/" component={Applogin}/>
            <Route path="/demo" component={Demo}/>
            <Route path="/user" component={Menu}/>
            <Route path="/producer" component={MenuProducer}/>
            <Route path="/combobox" component={combobox_state}/>
        </div>
    </BrowserRouter>
)

ReactDOM.render(
    <Main />,
    document.getElementById('root')
);

