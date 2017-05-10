import React from 'react';

class Demo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            //debug : 'IS Work 2 Front End - Demo Version\n'
        }

        this.api_device_add = this.api_device_add.bind(this);
        this.api_device_remove = this.api_device_remove.bind(this);
        this.api_device_history = this.api_device_history.bind(this);
        this.api_device_state = this.api_device_state.bind(this);
        this.api_producer_register = this.api_producer_register.bind(this);
        this.api_producer_product_model_add = this.api_producer_product_model_add.bind(this);
        this.api_producer_product_model_remove = this.api_producer_product_model_remove.bind(this);
        this.api_producer_device_type_add = this.api_producer_device_type_add.bind(this);
        this.api_producer_device_type_remove = this.api_producer_device_type_remove.bind(this);
        this.api_producer_device_type_history = this.api_producer_device_type_history.bind(this);
        this.api_user_register = this.api_user_register.bind(this);
        this.api_user_devices = this.api_user_devices.bind(this);
        this.api_user_history = this.api_user_history.bind(this);
        this.api_login = this.api_login.bind(this);
        this.api_device_monitor = this.api_device_monitor.bind(this);
    }



    api_device_add() {
        fetch('http://localhost:3000/api/device/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
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

    api_device_remove() {
        fetch('http://localhost:3000/api/device/remove', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
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

    api_device_history() {
        fetch('http://localhost:3000/api/device/history', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
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

    api_device_state() {
        fetch('http://localhost:3000/api/device/state', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
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

    api_producer_register() {
        fetch('http://localhost:3000/producer/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
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

    api_producer_product_model_add() {
        fetch('http://localhost:3000/api/producer/productmodel/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
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

    api_producer_product_model_remove() {
        fetch('http://localhost:3000/api/producer/productmodel/remove', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
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

    api_producer_device_type_add() {
        fetch('http://localhost:3000/api/producer/devicetype/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
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

    api_producer_device_type_remove() {
        fetch('http://localhost:3000/api/producer/devicetype/remove', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
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

    api_producer_device_type_history() {
        fetch('http://localhost:3000/api/producer/devicetype/history', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
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

    api_user_register() {
        fetch('http://localhost:3000/api/user/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
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

    api_user_devices() {
        fetch('http://localhost:3000/api/user/devices', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
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

    api_user_history() {
        fetch('http://localhost:3000/api/user/history', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
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

    api_login(creds) {
        fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },

            body: 'username=&password='

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

    api_device_monitor() {
        fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
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
            <div className="row col s12">
              <div className="row col s6">
                <div className="row center-align">
                  <a onClick={this.api_device_add} className="waves-effect waves-light btn cyan accent-4">add a device</a>
                </div>
                <div className="row center-align">
                  <a onClick={this.api_device_remove} className="waves-effect waves-light btn cyan accent-4">remove a device</a>
                </div>
                <div className="row center-align">
                  <a onClick={this.api_device_history} className="waves-effect waves-light btn cyan accent-4">device history</a>
                </div>
                <div className="row center-align">
                  <a onClick={this.api_device_state} className="waves-effect waves-light btn cyan accent-4">device state</a>
                </div>
                <div className="row center-align">
                  <a onClick={this.api_producer_register} className="waves-effect waves-light btn cyan accent-4">register a producer</a>
                </div>
                <div className="row center-align">
                  <a onClick={this.api_producer_product_model_add} className="waves-effect waves-light btn cyan accent-4">add a producer product model</a>
                </div>
                <div className="row center-align">
                  <a onClick={this.api_producer_product_model_remove} className="waves-effect waves-light btn cyan accent-4">remove a producer product model</a>
                </div>
                <div className="row center-align">
                  <a onClick={this.api_producer_device_type_add} className="waves-effect waves-light btn cyan accent-4">add a producer device type</a>
                </div>
                <div className="row center-align">
                  <a onClick={this.api_producer_device_type_remove} className="waves-effect waves-light btn cyan accent-4">remove a producer device type</a>
                </div>
                <div className="row center-align">
                  <a onClick={this.api_producer_device_type_history} className="waves-effect waves-light btn cyan accent-4">history of a producer device type</a>
                </div>
                <div className="row center-align">
                  <a onClick={this.api_user_register} className="waves-effect waves-light btn cyan accent-4">register a user</a>
                </div>
                <div className="row center-align">
                  <a onClick={this.api_user_history} className="waves-effect waves-light btn cyan accent-4">user history</a>
                </div>
                <div className="row center-align">
                  <a onClick={this.api_login} className="waves-effect waves-light btn cyan accent-4">login</a>
                </div>
                <div className="row center-align">
                  <a onClick={this.api_device_monitor} className="waves-effect waves-light btn cyan accent-4">device monitor</a>
                </div>
              </div>
              <div className="row col s6">
                <div style={{whiteSpace:'pre'}}>
                    {this.state.debug}
                </div>
              </div>
            </div>
        );
    }
}


export default Demo;
