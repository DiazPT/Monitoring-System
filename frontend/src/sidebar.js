import React, { Component } from 'react';
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';





//specify the base color/background of the parent container if needed
class MySideNav extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }

        //this.handleClick = this.handleClick(event).bind(this);

    }

    render() {
        return (

            <div style={{background: '#2c3e50', color: '#FFF', width: 220}}>
                <SideNav highlightColor='#E91E63' highlightBgColor='#00bcd4' >

                </SideNav>
            </div>
        );
    }
}

export default MySideNav;