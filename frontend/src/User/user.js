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
    {key: 'activity', name: 'activity', width: 400},
    {key: 'device', name: 'device', width: 200},
];


var columns_grid_values = [
    {key: 'id', name: 'id'},
    {key: 'value', name: 'value'},
    {key: 'type', name: 'type'},
    {key: 'timestamp', name: 'time'},
    {key: 'device', name: 'device'}];

const style = {
    backgroundColor: '#01A9DB',

};

var device_combobox = [];
var producer_combobox = [];
var type_combobox = [];
var model_combobox = [];

const submit_style = {
    marginTop: 30,
    marginLeft: 80,
};

const style_div = {
    marginLeft: 80,
}

let rows = [];
let rows_values = [];
let rows_values_history = [];
var number_rows = 0;
var number_rows_history = 0;

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
            value_producer: '',
            value_type: '',
            value_model: '',

        }

        this.rowGetter_values_history = this.rowGetter_values_history.bind(this);
        this.rowGetter_values = this.rowGetter_values.bind(this);
        this.rowGetter = this.rowGetter.bind(this);
        this.api_device_add = this.api_device_add.bind(this);
        this.api_device_remove = this.api_device_remove.bind(this);
        this.api_device_history = this.api_device_history.bind(this);
        this.api_device_state = this.api_device_state.bind(this);
        this.api_device_monitor = this.api_device_monitor.bind(this);
        this.api_init = this.api_init.bind(this);
        this.onChangecombobox = this.onChangecombobox.bind(this);
        this.onChangecombobox_producer = this.onChangecombobox_producer.bind(this);
        this.onChangecombobox_type = this.onChangecombobox_type.bind(this);
        this.onChangecombobox_model = this.onChangecombobox_model.bind(this);
    }

    rowGetter(i) {
        return rows[i];
    }

    rowGetter_values(i) {
        return rows_values[i];
    }

    rowGetter_values_history(i) {
        return rows_values_history[i];
    }

    api_init() {
/*

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

                }
                else {
                    alert("devices not added");

                }
            }).catch(error => {
            console.error(error);
        });
*/





        /*
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



         fetch('http://localhost:3000/api/producer/producers/all', {
         method: 'POST',
         headers: {
         'Content-Type': 'application/x-www-form-urlencoded'
         },
         body: 'username=' + this.state.producer + '&token=' + this.state.token
         })
         .then(response => response.json())
         .then(json => {
         if (json.message === 'ok') {

         producer_combobox = json.producers;

         }
         else {
         alert("Problem models");

         }
         }).catch(error => {
         console.error(error);
         });

         fetch('http://localhost:3000/api/producer/producers/model', {
         method: 'POST',
         headers: {
         'Content-Type': 'application/x-www-form-urlencoded'
         },
         body: 'username=' + this.state.producer + '&token=' + this.state.token
         })
         .then(response => response.json())
         .then(json => {
         if (json.message === 'ok') {

         model_combobox = json.models;
         }
         else {
         alert("Problem models");

         }
         }).catch(error => {
         console.error(error);
         });

         fetch('http://localhost:3000/api/producer/producers/type', {
         method: 'POST',
         headers: {
         'Content-Type': 'application/x-www-form-urlencoded'
         },
         body: 'username=' + this.state.producer + '&token=' + this.state.token
         })
         .then(response => response.json())
         .then(json => {
         if (json.message === 'ok') {

         type_combobox = json.types;


         }
         else {
         alert("Problem type");

         }
         }).catch(error => {
         console.error(error);
         });*/
    }

    onChangecombobox(value) {
        this.setState({value});
        this.state.value = value;
        console.log('Boolean Select value changed to', value);
    }

    onChangecombobox_producer(value_producer) {
        this.setState({value_producer});
        this.state.value_producer = value_producer;
        console.log('Boolean Select value changed to', value_producer);
    }

    onChangecombobox_type(value_type) {
        this.setState({value_type});
        this.state.value_type = value_type;
        console.log('Boolean Select value changed to', value_type);
    }

    onChangecombobox_model(value_model) {
        this.setState({value_model});
        this.state.value_model = value_model;
        console.log('Boolean Select value changed to', value_model);
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
                        number_rows = json.number_rows;

                        setTimeout(() => {
                            this.setState({
                                component: '3',
                                button_clicked_history: '1',
                            })
                        }, 50)
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
        if (this.state.button_clicked_history == '1') {


            this.setState({
                component: '0',
                button_clicked_history: '0',
            })
        }
    }


    api_device_add() {


        if (this.state.button_clicked_device_regist == '0') {

            fetch('http://localhost:3000/api/producer/producers/all', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: 'username=' + this.state.producer + '&token=' + this.state.token
            })
                .then(response => response.json())
                .then(json => {
                    if (json.message === 'ok') {

                        producer_combobox = json.producers;

                    }
                    else {
                        alert("Problem models");

                    }
                }).catch(error => {
                console.error(error);
            });

            fetch('http://localhost:3000/api/producer/producers/model', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: 'username=' + this.state.producer + '&token=' + this.state.token
            })
                .then(response => response.json())
                .then(json => {
                    if (json.message === 'ok') {

                        model_combobox = json.models;
                    }
                    else {
                        alert("Problem models");

                    }
                }).catch(error => {
                console.error(error);
            });

            fetch('http://localhost:3000/api/producer/producers/type', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: 'username=' + this.state.producer + '&token=' + this.state.token
            })
                .then(response => response.json())
                .then(json => {
                    if (json.message === 'ok') {

                        type_combobox = json.types;


                    }
                    else {
                        alert("Problem type");

                    }
                }).catch(error => {
                console.error(error);
            });


            setTimeout(() => {
                this.setState({
                    component: '1',
                    button_clicked_device_regist: '1',
                })
            }, 5000)

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
                        setTimeout(() => {
                            this.setState({
                                component: '2',
                                button_clicked_device_remove: '1',
                            })
                        }, 50)
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
                        setTimeout(() => {
                            this.setState({
                                component: '4',
                                button_clicked_device_state: '1',
                            })
                        }, 50)
                    }
                    else {
                        alert("devices not found");

                    }
                }).catch(error => {
                console.error(error);
            });

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


                        rows_values_history = json.rows;
                        number_rows_history = json.number_rows;


                        setTimeout(() => {
                            this.setState({
                                component: '5',
                                button_clicked_monitor: '1',
                            })
                        }, 50)

                    }
                    else if (json.message === 'Devices empty') {

                    }
                    else {
                        alert("devices not added");

                    }
                }).catch(error => {
                console.error(error);
            });
        }
        if (this.state.button_clicked_monitor == '1') {


            this.setState({
                component: '0',
                button_clicked_monitor: '0',
            })
        }
    }


    handleClickRegisterDevice() {

        if (this.state.value_producer === '' || this.state.device_name === '' || this.state.value_type === '' || this.state.value_model === '') {
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
                    body: 'username=' + this.state.username + '&token=' + this.state.token + '&device_name=' + this.state.device_name + '&device_type=' + this.state.value_type + '&device_model=' + this.state.value_model + '&producer=' + this.state.value_producer
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
                if (json.message === 'Device removed') {
                    alert("Device removed");
                }
                else {
                    alert("devices not found");

                }
            }).catch(error => {
            console.error(error);
        });
        this.setState({
            component: '0',
            button_clicked_monitor: '0',
        })
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
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
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
                            <div className="section">
                                <h3 className="section-heading">{this.props.label}</h3>
                                <Select
                                    onChange={this.onChangecombobox_type}
                                    options={type_combobox}
                                    simpleValue
                                    value={this.state.value_type}
                                    clearable="false"
                                />
                            </div>
                            <br/>
                            <div className="section">
                                <h3 className="section-heading">{this.props.label}</h3>
                                <Select
                                    onChange={this.onChangecombobox_model}
                                    options={model_combobox}
                                    simpleValue
                                    value={this.state.value_model}
                                    clearable="false"
                                />
                            </div>
                            <br/>
                            <div className="section">
                                <h3 className="section-heading">{this.props.label}</h3>
                                <Select
                                    onChange={this.onChangecombobox_producer}
                                    options={producer_combobox}
                                    simpleValue
                                    value={this.state.value_producer}
                                    clearable="false"
                                />
                            </div>
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
                                    rowsCount={number_rows}
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
                        <div >
                            <div className="activity">
                                <AppBar
                                    title="Monitor Devices"
                                    iconElementLeft={<i className=" fa fa-address-card-o fa-adjust fa-3x"></i>}

                                />
                                <ReactDataGrid

                                    columns={columns_grid_values}
                                    rowsCount={number_rows_history}
                                    minHeight={200}
                                    rowGetter={this.rowGetter_values_history}

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

                        <div className="button" onClick={(event) => this.api_init()}><i
                            className="fa fa-bars fa-2x"/>
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

export
default
Menu;


/*<div className="button" style={style}><i className="fa fa-globe" /></div>
 <div className="button" style={style}><i className="fa fa-plug" /></div>*/