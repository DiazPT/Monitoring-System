import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import FontIcon from 'material-ui/FontIcon';

class Register extends Component {
    constructor(props){
        super(props);
        this.state={
            name:'',
            email:'',
            password:'',
            data_regist:'',
            username:''
        }
    }

    handleClick(event){

        fetch('http://localhost:3000/api/user/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'username='+this.state.username+'&name=' + this.state.name+ '&email=' + this.state.email+'&password=' + this.state.password
        })
            .then(response => response.json())
            .then(json => {
                this.setState({
                    debug : this.state.debug + json.message + '\n'
                });
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
                            title="Register"
                            iconElementLeft={<FontIcon className="muidocs-icon-action-home"/>}
                        />
                        <TextField
                            hintText="Enter your Name"
                            floatingLabelText="Name"
                            required="required"
                            onChange = {(event,newValue) => this.setState({name:newValue})}
                        />
                        <br/>
                        <TextField
                            hintText="Enter your Username"
                            floatingLabelText="Username"
                            required="required"
                            onChange = {(event,newValue) => this.setState({username:newValue})}
                        />
                        <br/>
                        <TextField
                            hintText="Enter your Email"
                            type="email"
                            required="required"
                            floatingLabelText="Email"
                            onChange = {(event,newValue) => this.setState({email:newValue})}
                        />
                        <br/>
                        <TextField
                            type = "password"
                            hintText="Enter your Password"
                            floatingLabelText="Password"
                            required="required"
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
export default Register;