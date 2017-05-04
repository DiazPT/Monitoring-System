import React, { Component, PropTypes } from 'react';
import MotionMenu from './index';
import history from '../history';


class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            //debug : 'IS Work 2 Front End - Demo Version\n'
            username:'',
            password:''
        }

        this.api_device_add = this.api_device_add.bind(this);
        //this.api_device_remove = this.api_device_remove.bind(this);
        this.api_device_history = this.api_device_history.bind(this);
        //this.api_device_state = this.api_device_state.bind(this);
        //this.api_device_monitor = this.api_device_monitor.bind(this);
    }



    api_device_history(){
        var data =  new Date().getDay() + "-" +new Date().getMonth() + "-" + new Date().Year();
        alert(data.toString());
    }

    api_device_add(){


    }


    render() {
        /*var user = require('../Login/Login');
        alert(user.State.username);
        this.state.username=user.State.username;
        this.state.password=user.State.password;
        if(this.state.username== '' || this.state.password== ''){
            alert("Not session active");
            history.push('/');
            window.location = "/";
        }
        else{*/
            //alert(this.state.username);
            return (
                <MotionMenu
                    type="circle"
                    margin={120}
                    y={0}
                    bumpy
                    x={0}
                    openSpeed={60}
                    wing={false}
                    reverse={false}
                    onOpen={() => console.log('onOpen')}
                    onClose={() => console.log('onClose')}
                >
                    <div className="button" ><i className="fa fa-bars" /></div>
                    <div className="button" onClick={(event) => this.api_device_add()}><i className="fa fa-plus" /></div>
                    <div className="button" onClick={(event) => this.api_device_history()}><i className="fa fa-cloud" /></div>
                    <div className="button"><i className="fa fa-home" /></div>
                    <div className="button"><i className="fa fa-flash" /></div>
                    <div className="button"><i className="fa fa-heart" /></div>
                    <div className="button"><i className="fa fa-globe" /></div>
                    <div className="button"><i className="fa fa-plug" /></div>
                </MotionMenu>
            );
        //}

    }
}
export default Menu;