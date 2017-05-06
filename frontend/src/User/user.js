import React, { Component, PropTypes } from 'react';
import MotionMenu from './index';
import history from '../history';


const style = {
    backgroundColor: '#01A9DB',

};

class Menu extends Component {



    constructor(props) {
        super(props);

        this.state = {
            //debug : 'IS Work 2 Front End - Demo Version\n'
            username:'',
            password:''
        }

        this.api_device_add = this.api_device_add.bind(this);
        this.api_device_remove = this.api_device_remove.bind(this);
        this.api_device_history = this.api_device_history.bind(this);
        this.api_device_state = this.api_device_state.bind(this);
        this.api_device_monitor = this.api_device_monitor.bind(this);
    }



    api_device_history(){
        var data =  new Date().getDay() + "-" +new Date().getMonth() + "-" + new Date().Year();
        alert(data.toString());
    }

    api_device_add(){


    }

    api_device_remove(){

    }

    api_device_state(){

    }

    api_device_monitor(){

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

        if(localStorage.getItem('token') === null){
            alert("aquiiii");
            window.location="./";
        }

            return (
                <MotionMenu
                    type="circle"
                    margin={200}
                    y={0}
                    bumpy
                    x={0}
                    openSpeed={60}
                    wing={false}
                    reverse={false}
                    onOpen={() => console.log('onOpen')}
                    onClose={() => console.log('onClose')}
                >
                    <div className="button"  ><i className="fa fa-bars fa-2x" /></div>
                    <div className="button" style={style}  onClick={(event) => this.api_device_add()}><i className="fa fa-plus fa-2x" /></div>
                    <div className="button" style={style} onClick={(event) => this.api_device_history()}><i className="fa fa-history fa-2x" /></div>
                    <div className="button" style={style} onClick={(event) => this.api_device_remove()}><i className="fa fa-trash fa-2x" /></div>
                    <div className="button" style={style} onClick={(event) => this.api_device_state()}><i className="fa fa-power-off fa-2x" /></div>
                    <div className="button" style={style} onClick={(event) => this.api_device_monitor()}><i className="fa fa-list-alt fa-2x" /></div>

                </MotionMenu>

            );
        //}

    }
}
export default Menu;


/*<div className="button" style={style}><i className="fa fa-globe" /></div>
<div className="button" style={style}><i className="fa fa-plug" /></div>*/