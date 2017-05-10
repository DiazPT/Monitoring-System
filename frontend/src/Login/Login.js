import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import history from '../history'




const style = {
    marginTop: 30,
    marginLeft: 80,
    marginBottom: 15,

};

const style_bar = {
    fontSize: 40,
    alignItems: 'center',
    justifyContent: 'center',

};

const style_div = {
    align: 'center',
};

class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            token: null,
            //usernamelogin:'',
            //passwordlogin:''
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
                if(json.message === 'Login ok'){

                    this.state.token= json.token;
                    localStorage.setItem('token',this.state.token);
                    //State.username=this.state.username;
                    //State.password=this.state.password;

                    alert("aqui");
                    console.log("aqui");

                    var io = require('socket.io-client');
                    var socket = io.connect('http://localhost:3000');
                    socket.on('connect', () => {
                        alert("Successfully connected!");
                    });
                    //socket.emit('connected');
                    //io.on('connection', function(client){});
                    //io.listen(3000);




                    alert("connected to Socket " + io);


                    alert("ola");
                    history.push('/user');
                    window.location = "/user";
                }
                if(json.message === 'Login producer'){
                    //history.push('/producer');
                    //window.location = "/producer";
                    this.state.token= json.token;
                    
                    alert('producer');
                    history.push('/producer');
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
            <div className="row center-align">

                <MuiThemeProvider>
                    <div>

                        <AppBar

                            title="Login"
                            iconElementLeft={<i className="material-icons medium">lock</i>}
                            titleStyle={style_bar}
                            Style={style_div}
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



export default Login;
//module.exports.State = State;
    //username: this.state.usernamelogin,
    //password: this.state.passwordlogin