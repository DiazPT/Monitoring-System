import React, { Component } from 'react';
//import injectTapEventPlugin from 'react-tap-event-plugin';
import LoginScreen from './Loginscreen';
//import RaisedButton from 'material-ui/RaisedButton';
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
//injectTapEventPlugin();
import './App.css';

class Applogin extends Component {
    constructor(props){
        super(props);
        this.state={
            loginPage:[],
            uploadScreen:[]
        }

        this.a = this.a.bind(this);
    }
    componentWillMount(){
       /* var loginPage =[];
        loginPage.push(<Loginscreen parentContext={this}/>);
        this.setState({
            loginPage:loginPage
        })*/
    }

    a() {
        this.props.history.push('/user');
    }
    render() {
        /*{this.state.loginPage}
         {this.state.uploadScreen}*/

        //<button onClick={this.a}>um botao do app</button>


        return (
            <div>

                <LoginScreen />
            </div>
        );
    }
}
/*const style = {
    margin: 15,
};*/
export default Applogin;