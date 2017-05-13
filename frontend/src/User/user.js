import React, {Component, PropTypes} from 'react';
import MotionMenu from './index';
import history from '../history';
import Combobox_state from './combobox_state';
import Select from 'react-select';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
const ReactDataGrid = require('react-data-grid');
var css = require('react-datagrid/index.css');


var columns_grid = [
    {key: 'id', name: 'id', width: 50},
    {key: 'activity', name:'activity', width: 400},
    {key: 'device', name: 'device', width: 200},
];


var columns_grid_values = [
    { key: 'id', name: 'ID' },
    { key: 'value', name: 'Value' },
    { key: 'type', name: 'Type' },
    { key: 'timestamp', name: 'Time' },
    { key: 'device', name: 'Device' }];

const style = {
    backgroundColor: '#01A9DB',

};

var device_combobox = [];

const submit_style = {
    marginTop: 30,
    marginLeft: 80,
};

const style_div = {
    marginLeft: 80,
}

let rows = [];
let rows_values = [];
var number_rows = 0;

//var device_id = "_id":"1003452345","current_state":"on";

class Menu extends Component {


    constructor(props) {
        super(props);

        this.state = {
            //debug : 'IS Work 2 Front End - Demo Version\n'
            username: '',
            token: null,
            component: '0',
            device_name: '',
            device_model: '',
            device_type: '',
            producer: '',
            producers: '',
            button_clicked_device_regist: '0',
            button_clicked_device_remove: '0',
            button_clicked_history: '0',
            button_clicked_monitor: '0',
            button_clicked_device_state: '0',
            first_time: '1',
            value: '',
            combobox_state: '',
        }


        this.rowGetter_values = this.rowGetter_values.bind(this);
        this.rowGetter = this.rowGetter.bind(this);
        this.api_device_add = this.api_device_add.bind(this);
        this.api_device_remove = this.api_device_remove.bind(this);
        this.api_device_history = this.api_device_history.bind(this);
        this.api_device_state = this.api_device_state.bind(this);
        this.api_device_monitor = this.api_device_monitor.bind(this);
        this.api_init = this.api_init.bind(this);
        this.onChangecombobox = this.onChangecombobox.bind(this);
    }

    rowGetter(i) {
        return rows[i];
    }

    rowGetter_values(i){
        return rows_values[i];
    }

    api_init() {

        fetch('http://localhost:3000/api/device/all/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'username=' + this.state.username + '&token=' + this.state.token
        })
            .then(response => response.json())
            .then(json => {
                if (json.message === 'ok') {
                    device_combobox = json.devices_all;
                }
                else {
                    alert("devices not found");

                }
            }).catch(error => {
            console.error(error);
        });

        fetch('http://localhost:3000/api/device/history', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'username=' + this.state.username + '&token=' + this.state.token
        })
            .then(response => response.json())
            .then(json => {
                if (json.message === 'ok') {
                    rows = json.rows;

                    number_rows = json.number_rows;

                }
                else if (json.message === 'Devices empty') {
                    alert("List of devices empty");
                }
                else {
                    alert("devices not added");

                }
            }).catch(error => {
            console.error(error);
        });
    }

    onChangecombobox(value) {
        this.setState({value});
        this.state.value = value;
        console.log('Boolean Select value changed to', value);
    }

    api_device_history() {
        if (this.state.button_clicked_history == '0') {

            fetch('http://localhost:3000/api/device/history', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: 'username=' + this.state.username + '&token=' + this.state.token
            })
                .then(response => response.json())
                .then(json => {
                    if (json.message === 'ok') {

                        rows = json.rows;
                    }
                    else if (json.message === 'Devices empty') {
                        alert("List of devices empty");
                    }
                    else {
                        alert("devices not added");

                    }
                }).catch(error => {
                console.error(error);
            });

            this.setState({
                component: '3',
                button_clicked_history: '1',
            })

        }
        if (this.state.button_clicked_history == '1') {


            this.setState({
                component: '0',
                button_clicked_history: '0',
            })
        }
    }


    api_device_add() {
        if (this.state.button_clicked_device_regist == '0') {
            this.setState({
                component: '1',
                button_clicked_device_regist: '1',
            })
        }
        if (this.state.button_clicked_device_regist == '1') {
            this.setState({
                component: '0',
                button_clicked_device_regist: '0',
            })
        }

    }

    api_device_remove() {
        if (this.state.button_clicked_device_remove == '0') {
            this.setState({
                component: '2',
                button_clicked_device_remove: '1',
            })

            fetch('http://localhost:3000/api/device/all/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: 'username=' + this.state.username + '&token=' + this.state.token
            })
                .then(response => response.json())
                .then(json => {
                    if (json.message === 'ok') {
                        device_combobox = json.devices_all;
                    }
                    else {
                        alert("devices not found");

                    }
                }).catch(error => {
                console.error(error);
            });


        }
        if (this.state.button_clicked_device_remove == '1') {
            this.setState({
                component: '0',
                button_clicked_device_remove: '0',
            })
        }

    }

    api_device_state() {
        if (this.state.button_clicked_device_state == '0') {

            fetch('http://localhost:3000/api/device/all/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: 'username=' + this.state.username + '&token=' + this.state.token
            })
                .then(response => response.json())
                .then(json => {
                    if (json.message === 'ok') {
                        device_combobox = json.devices_all;
                    }
                    else {
                        alert("devices not found");

                    }
                }).catch(error => {
                console.error(error);
            });


            this.setState({
                component: '4',
                button_clicked_device_state: '1',
            })
        }
        if (this.state.button_clicked_device_state == '1') {
            this.setState({
                component: '0',
                button_clicked_device_state: '0',
            })
        }

    }

    api_device_monitor() {
        if (this.state.button_clicked_monitor == '0') {

            fetch('http://localhost:3000/api/device/value_history', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: 'username=' + this.state.username + '&token=' + this.state.token
            })
                .then(response => response.json())
                .then(json => {
                    if (json.message === 'ok') {

                        rows_values = json.rows;
                        alert(rows_values);
                    }
                    else if (json.message === 'Devices empty') {
                        alert("List of devices empty");
                    }
                    else {
                        alert("devices not added");

                    }
                }).catch(error => {
                console.error(error);
            });

            this.setState({
                component: '5',
                button_clicked_monitor: '1',
            })

        }
        if (this.state.button_clicked_monitor == '1') {


            this.setState({
                component: '0',
                button_clicked_monitor: '0',
            })
        }
    }

    handleClickRegisterDevice() {

        if (this.state.producer === '' || this.state.device_name === '' || this.state.device_type === '' || this.state.device_model === '') {
            alert("Fill the blank fields");
        }
        else {
            if (this.state.producers.indexOf(this.state.producer) == -1) {
                alert("That Producer is not registered on the database")
            }
            else {
                fetch('http://localhost:3000/api/device/add', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    body: 'username=' + this.state.username + '&token=' + this.state.token + '&device_name=' + this.state.device_name + '&device_type=' + this.state.device_type + '&device_model=' + this.state.device_model + '&producer=' + this.state.producer
                })
                    .then(response => response.json())
                    .then(json => {
                        if (json.message === 'device added') {
                            alert("device added");
                        }
                        else {
                            alert("device not added");
                        }
                    }).catch(error => {
                    console.error(error);
                });

                this.setState({
                    component: '0',
                    button_clicked_device_regist: '0',
                })
            }
        }

    }

    handleClickRemoveDevice() {
        fetch('http://localhost:3000/api/device/remove/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'username=' + this.state.username + '&token=' + this.state.token + '&device=' + this.state.value
        })
            .then(response => response.json())
            .then(json => {
                if (json.message === 'ok') {

                }
                else {
                    alert("devices not found");

                }
            }).catch(error => {
            console.error(error);
        });
    }

    handleClickState() {
        this.state.combobox_state = localStorage.getItem('combobox_state');
        if (this.state.combobox_state === '' || this.state.value === '') {
            alert("Fill the blanked fields");
        }
        else {
            fetch('http://localhost:3000/api/device/state/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: 'username=' + this.state.username + '&token=' + this.state.token + '&device=' + this.state.value + '&current_state=' + this.state.combobox_state
            })
                .then(response => response.json())
                .then(json => {
                    if (json.message === 'Device changed') {
                        alert("Changed state");
                    }
                    else if (json.message === 'Device problem') {
                        alert("Device has a problem");

                    }
                    else {
                        alert("Device not found");
                    }
                }).catch(error => {
                console.error(error);
            });
        }
    }


    render() {


        let mainModule;
        if (this.state.component === '0')
            mainModule = <br/>;
        if (this.state.component === '1') {
            mainModule =
                <div>
                    <MuiThemeProvider>
                        <div>
                            <AppBar
                                title="Register device"
                                iconElementLeft={<i className=" fa fa-address-card-o fa-adjust fa-3x"></i>}
                            />
                            <TextField
                                hintText="Enter the device Name"
                                floatingLabelText="Name"
                                required="required"
                                onChange={(event, newValue) => this.setState({device_name: newValue})}
                            />
                            <br/>
                            <TextField
                                hintText="Enter the device type"
                                floatingLabelText="device type"
                                required="required"
                                onChange={(event, newValue) => this.setState({device_type: newValue})}
                            />
                            <br/>
                            <TextField
                                hintText="Enter the model"
                                required="required"
                                floatingLabelText="device model"
                                onChange={(event, newValue) => this.setState({device_model: newValue})}
                            />
                            <br/>
                            <TextField
                                hintText="Enter the producer"
                                required="required"
                                floatingLabelText="producer"
                                onChange={(event, newValue) => this.setState({producer: newValue})}
                            />
                            <br/>
                            <RaisedButton label="Submit" primary={true} style={submit_style}
                                          onClick={(event) => this.handleClickRegisterDevice()}/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                        </div>
                    </MuiThemeProvider>
                </div>;
        }
        if (this.state.component === '2') {
            mainModule =
                <div>
                    <MuiThemeProvider>
                        <div>
                            <AppBar
                                title="Remove device"
                                iconElementLeft={<i className=" fa fa-address-card-o fa-adjust fa-3x"></i>}
                            />
                            <div className="section">
                                <h3 className="section-heading">{this.props.label}</h3>
                                <Select
                                    onChange={this.onChangecombobox}
                                    options={device_combobox}
                                    simpleValue
                                    value={this.state.value}
                                    clearable="false"
                                />
                            </div>
                            <br/>
                            <RaisedButton label="Submit" primary={true} style={submit_style}
                                          onClick={(event) => this.handleClickRemoveDevice()}/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                        </div>
                    </MuiThemeProvider>
                </div>;
        }
        if (this.state.component === '3') {
            mainModule =
                <div>
                    <MuiThemeProvider >
                        <div >
                            <div className="activity">
                                <AppBar
                                    title="Device history"
                                    iconElementLeft={<i className=" fa fa-address-card-o fa-adjust fa-3x"></i>}

                                />
                                <ReactDataGrid

                                    columns={columns_grid}
                                    rowsCount={50}
                                    minHeight={200}
                                    rowGetter={this.rowGetter}

                                    //if you don't want to show a column menu to show/hide columns, use
                                    //withColumnMenu={false}
                                />
                            </div>

                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                        </div>
                    </MuiThemeProvider >
                </div>;

        }
        if (this.state.component === '4') {
            mainModule =
                <div>
                    <MuiThemeProvider>
                        <div>
                            <AppBar
                                title="Change State"
                                iconElementLeft={<i className=" fa fa-address-card-o fa-adjust fa-3x"></i>}
                            />
                            <div className="section">
                                <h3 className="section-heading">{this.props.label}</h3>
                                <Select
                                    onChange={this.onChangecombobox}
                                    options={device_combobox}
                                    simpleValue
                                    value={this.state.value}
                                    clearable="false"
                                />
                            </div>
                            <br/>
                            <Combobox_state/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <RaisedButton label="Submit" primary={true} style={submit_style}
                                          onClick={(event) => this.handleClickState()}/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                        </div>
                    </MuiThemeProvider>
                </div>;
        }
        if (this.state.component === '5') {
            mainModule =
                <div>
                    <MuiThemeProvider >
                        <div>
                            <div className="activity">
                                <AppBar
                                    title="Device monitor"
                                    iconElementLeft={<i className=" fa fa-address-card-o fa-adjust fa-3x"></i>}

                                />
                                <ReactDataGrid

                                    columns={columns_grid_values}
                                    rowsCount={500}
                                    minHeight={200}
                                    rowGetter={this.rowGetter_values}

                                    //if you don't want to show a column menu to show/hide columns, use
                                    //withColumnMenu={false}
                                />
                            </div>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                        </div>
                    </MuiThemeProvider >
                </div>;

        }

        this.state.token = localStorage.getItem('token');
        this.state.username = localStorage.getItem('username');
        this.state.producers = localStorage.getItem('producers');
        this.api_init();

        if (this.state.token == null) {
            alert("Não tem sessão iniciada");
            window.location = "./";
        }

        return (

            <div>{mainModule}
                <div style={style_div}>

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

                        <div className="button" onClick={(event) => this.api_init()}><i className="fa fa-bars fa-2x" />
                        </div>
                        <div className="button" style={style} onClick={(event) => this.api_device_add()}><i
                            className="fa fa-plus fa-2x"/></div>
                        <div className="button" style={style} onClick={(event) => this.api_device_history()}><i
                            className="fa fa-history fa-2x"/></div>
                        <div className="button" style={style} onClick={(event) => this.api_device_remove()}><i
                            className="fa fa-trash fa-2x"/></div>
                        <div className="button" style={style} onClick={(event) => this.api_device_state()}><i
                            className="fa fa-power-off fa-2x"/></div>
                        <div className="button" style={style} onClick={(event) => this.api_device_monitor()}><i
                            className="fa fa-list-alt fa-2x"/></div>

                    </MotionMenu>
                </div>
            </div>
        );
        //}

    }
}
export default Menu;


/*<div className="button" style={style}><i className="fa fa-globe" /></div>
 <div className="button" style={style}><i className="fa fa-plug" /></div>*/