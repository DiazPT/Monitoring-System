import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Login from './Login';
import Register from './Register';

const style = {
    margin: 15,
};


class Loginscreen extends Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            loginscreen:[],
            loginmessage:'',
            buttonLabel:'Register',
            isLogin:true
        }
        this.a = this.a.bind(this);
    }


    handleClick(event){
        // console.log("event",event);
        var loginmessage;
        if(this.state.isLogin){
            //var loginscreen=[];
            //loginscreen.push(<Register parentContext={this}/>);
            loginmessage = "If you have already an account, go to the login!";
            this.setState({
                //loginscreen:loginscreen,
                loginmessage:loginmessage,
                buttonLabel:"Login",
                isLogin:false
            })
        }
        else{
            //var loginscreen=[];
            //loginscreen.push(<Login.Login parentContext={this}/>);
            loginmessage = "Want to join?";
            this.setState({
                ///loginscreen:loginscreen,
                loginmessage:loginmessage,
                buttonLabel:"Register",
                isLogin:true
            });

        }
    }

    a() {
        this.props.history.push('/user');
    }

    componentWillMount(){
       /* var loginscreen=[];
        loginscreen.push();*/
        var loginmessage = "Want to join?";
        this.setState({
            //loginscreen:loginscreen,
            loginmessage:loginmessage
        })
    }


    render() {
        let mainModule;
        if(this.state.isLogin)
            mainModule = <Login />;
        else
            mainModule = <Register />;
            /*
             <div className="loginscreen">
             <button onClick={this.a} >click do loginscreen</button>
             {mainModule}
             <div>
             {this.state.loginmessage}
             <MuiThemeProvider>
             <div>
             <RaisedButton label={this.state.buttonLabel} primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
             </div>
             </MuiThemeProvider>
             </div>
             </div>
             */
        return (
            //<button onClick={this.a}>um botao do loginscreen</button>
            <div className="loginscreen">

                {mainModule}
                <div>
                    {this.state.loginmessage}
                    <MuiThemeProvider>
                        <div>
                            <RaisedButton label={this.state.buttonLabel} primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
                        </div>
                    </MuiThemeProvider>
                </div>
            </div>
        );
    }
}

export default Loginscreen;