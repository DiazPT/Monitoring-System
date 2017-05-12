import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import ValuesAsBooleansField from './combobox';


const style = {
    marginTop: 30,
    marginBottom: 15,

};

const style_bar = {
    fontSize: 40,

};

class Register extends Component {
    constructor(props){
        super(props);
        this.state={
            name:'',
            email:'',
            password:'',
            data_register:'',
            username:'',
            api:''
        }
    }

    handleClick(event) {


        if (this.state.username === '' || this.state.password === '' || this.state.email === '' || this.state.name === '') {
            alert("Fill the blank fields");
        }
        else {
            if (localStorage.getItem('combobox') === null) {
                alert("Select if you are a producer or a user");
            }
            else {


                if (localStorage.getItem('combobox') === 'user')
                    this.state.api = 'http://localhost:3000/api/user/register'; //USER
                else
                    this.state.api = 'http://localhost:3000/api/producer/register';  //PRODUCER


                fetch(this.state.api, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    body: 'username=' + this.state.username + '&name=' + this.state.name + '&email=' + this.state.email + '&password=' + this.state.password
                })
                    .then(response => response.json())
                    .then(json => {
                        this.setState({});
                        if (json.message === 'Well register') {


                            this.state.token = json.token;
                            localStorage.setItem('token', this.state.token);
                            localStorage.setItem('username', this.state.username);
                            //State.username=this.state.username;
                            //State.password=this.state.password;

                            /*var io = require('socket.io-client');
                             var socket = io.connect('http://localhost:3000');
                             socket.on('connect', () => {
                             alert("Successfully connected!");
                             });*/
                            //socket.emit('connected');
                            //io.on('connection', function(client){});
                            //io.listen(3000);

                            alert("Registered with success");
                            //history.push('/user');
                            window.location = "/user";
                        }
                        if (json.message === 'Producer register') {
                            //history.push('/producer');
                            //window.location = "/producer";
                            this.state.token = json.token;
                            localStorage.setItem('token', this.state.token);
                            localStorage.setItem('username', this.state.username);
                            alert("Registered with success");
                            window.location = "/producer";
                            //history.push('/producer');
                        }
                        if (json.message === 'Error 404') {
                            alert("Database has some problems")
                        }
                        if (json.message === 'Problem regist') {
                            alert("Username already taken")
                        }
                    }).catch(error => {
                    console.error(error);
                });

            }


        }
    }


    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <div>
                        <AppBar
                            title="Register"
                            titleStyle={style_bar}
                            iconElementLeft={<i className=" fa fa-address-card-o fa-adjust fa-3x"></i>}
                        />
                        <ValuesAsBooleansField/>
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

export default Register;