import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import history from '../history'




class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
        }

        //this.handleClick = this.handleClick(event).bind(this);

    }


    handleClick(event){

        fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'username='+this.state.username+'&password=' + this.state.password
        })
            .then(response => response.json())
            .then(json => {
                this.setState({
                });
                if(json.message === 'Login user'){
                    history.push('/user');
                    window.location = "/user";

                }
                if(json.message === 'Login producer'){
                    //history.push('/producer');
                    //window.location = "/producer";

                }
                if(json.message === 'Error 404'){
                    alert("Database has some problems")
                }
                if(json.message === 'Username or Password wrong'){
                    alert("Username or Password Wrong");
                }
            }).catch(error => {
            console.error(error);
        });
    }


    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <div>
                        <AppBar
                            title="Login"
                            iconElementLeft={<FontIcon className="muidocs-icon-action-home"/>}
                        />
                        <TextField
                            hintText="Enter your Username"
                            floatingLabelText="Username"
                            onChange = {(event,newValue) => this.setState({username:newValue})}
                        />
                        <br/>
                        <TextField
                            type="password"
                            hintText="Enter your Password"
                            floatingLabelText="Password"
                            onChange = {(event,newValue) => this.setState({password:newValue})}
                        />
                        <br/>
                        <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}
const style = {
    margin: 15,
};


export default Login;