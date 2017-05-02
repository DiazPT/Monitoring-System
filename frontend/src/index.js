import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import Demo from './demo.js';
import App from './Login/App.js';



const Main = () => (
    <BrowserRouter>
        <div>
            <Route exact path="/" component={App}/>
        </div>
    </BrowserRouter>
)

ReactDOM.render(
    <Main />,
    document.getElementById('root')
);