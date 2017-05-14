//this.api_producer_register = this.api_producer_register.bind(this);
//this.api_producer_product_model_add = this.api_producer_product_model_add.bind(this);
//this.api_producer_product_model_remove = this.api_producer_product_model_remove.bind(this);
//this.api_producer_device_type_add = this.api_producer_device_type_add.bind(this);
//this.api_producer_device_type_remove = this.api_producer_device_type_remove.bind(this);
//this.api_producer_device_type_history = this.api_producer_device_type_history.bind(this);
//this.api_user_register = this.api_user_register.bind(this);
//this.api_user_devices = this.api_user_devices.bind(this);
//this.api_user_history = this.api_user_history.bind(this);


import React, {Component, PropTypes} from 'react';
import MotionMenu from './index';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Select from 'react-select';
const ReactDataGrid = require('react-data-grid');
import history from '../history';


const style = {
    backgroundColor: '#01A9DB',

};


var columns_grid_values = [
    {key: 'id', name: 'id', width: 75},
    {key: 'username', name: 'username', width: 100},
    {key: 'activity', name: 'activity'},
    {key: 'time', name: 'time', width: 175},
];

var columns_grid_values_type = [
    {key: 'id', name: 'id', width: 75},
    {key: 'username', name: 'username', width: 100},
    {key: 'activity', name: 'activity'},
    {key: 'device', name: 'device', width: 100},
];

var columns_grid_values_model = [
    {key: 'reference', name: 'Reference'},
    {key: 'name', name: 'Name'},
    {key: 'stock', name: 'Stock', width: 50},
    {key: 'sells', name: 'Selss', width: 50},
];

var user_grid = [];
var type_grid = [];
var device_grid = [];
var model_grid = [];
var number_rows_history = 0;
var device_combobox = [];
var device_combobox_hist = [];
var type_combobox = [];
var device_combobox_user = [];
var all_device_combobox = [];

const smallstyle = {
    backgroundColor: '#A9F5BC',

};

const submit_style = {
    marginTop: 30,
    marginLeft: 80,
};

const googlestyle = {
    backgroundColor: '#01A9DB',
    lineHeight: '10'
};

const logoutstyle = {
    marginLeft: 500,
    marginTop: -2000
};


class MenuProducer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            //debug : 'IS Work 2 Front End - Demo Version\n'
            producer: '',
            name_model: '',
            Device_type: '',
            token: '',
            button_click_model: 0,
            component: '0',
            button_click_model_rem: 0,
            button_click_type_rem: 0,
            button_click_type_add: 0,
            button_click_user_hist: 0,
            button_click_type_hist: 0,
            button_click_device_hist: 0,
            button_click_model_hist: 0,
            stock: 0,
            value_type: '',
            value_model: '',
            value_user: '',
            value_device: '',
        }

        this.api_producerlogout = this.api_producerlogout.bind(this);
        this.onChangecombobox_model_hist = this.onChangecombobox_model_hist.bind(this);
        this.api_producer_device_model_history = this.api_producer_device_model_history.bind(this);
        this.rowGetter_model = this.rowGetter_model.bind(this);
        this.rowGetter_device = this.rowGetter_device.bind(this);
        this.onChangecombobox_device = this.onChangecombobox_device.bind(this);
        this.handleClick_device_history = this.handleClick_device_history.bind(this);
        this.rowGetter_user = this.rowGetter_user.bind(this);
        this.handleClick_model_add = this.handleClick_model_add.bind(this);
        this.handleClick_type_add = this.handleClick_type_add.bind(this);
        this.handleClick_model_remove = this.handleClick_model_remove.bind(this);
        this.handleClick_type_remove = this.handleClick_type_remove.bind(this);
        this.handleClick_user_history = this.handleClick_user_history.bind(this);
        this.onChangecombobox_user = this.onChangecombobox_user.bind(this);
        this.onChangecombobox_type = this.onChangecombobox_type.bind(this);
        this.onChangecombobox_model = this.onChangecombobox_model.bind(this);
        this.api_init = this.api_init.bind(this);
        this.api_producer_product_model_add = this.api_producer_product_model_add.bind(this);
        this.api_producer_product_model_remove = this.api_producer_product_model_remove.bind(this);
        this.api_producer_device_type_add = this.api_producer_device_type_add.bind(this);
        this.api_producer_device_type_remove = this.api_producer_device_type_remove.bind(this);
        this.api_producer_device_type_history = this.api_producer_device_type_history.bind(this);
        this.api_device_history = this.api_device_history.bind(this);
        this.api_user_history = this.api_user_history.bind(this);

    }


    handleClick_model_add() {

        if (this.state.name_model === null) {
            alert("Fill the blanked field");
        }
        else {
            fetch('http://localhost:3000/api/producer/productmodel/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: 'username=' + this.state.producer + '&token=' + this.state.token + '&name_model=' + this.state.name_model + '&referencia=' + this.state.referencia + '&stock=' + this.state.stock
            })
                .then(response => response.json())
                .then(json => {
                    if (json.message === 'ok') {
                        alert("Added model");
                    }
                    else {
                        alert("Problem models");

                    }
                }).catch(error => {
                console.error(error);
            });
            this.setState({
                component: '0',
                button_click_model: 0

            });
        }

    }

    handleClick_type_add() {

        if (this.state.name_model === null) {
            alert("Fill the blanked field");
        }
        else {
            fetch('http://localhost:3000/api/producer/devicetype/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: 'username=' + this.state.producer + '&token=' + this.state.token + '&name_type=' + this.state.Device_type
            })
                .then(response => response.json())
                .then(json => {
                    if (json.message === 'ok') {
                        alert("Added type");
                    }
                    else {
                        alert("Problem models");

                    }
                }).catch(error => {
                console.error(error);
            });
            this.setState({
                component: '0',
                button_click_type_add: 0

            });
        }

    }

    handleClick_model_remove() {

        if (this.state.name_model === null) {
            alert("Fill the blanked field");
        }
        else {
            fetch('http://localhost:3000/api/producer/productmodel/remove', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: 'username=' + this.state.producer + '&token=' + this.state.token + '&name_model=' + this.state.value_model
            })
                .then(response => response.json())
                .then(json => {
                    if (json.message === 'ok') {
                        alert("Removed model");
                    }
                    else {
                        alert("Problem models");

                    }
                }).catch(error => {
                console.error(error);
            });
            this.setState({
                component: '0',
                button_click_model_rem: 0

            });
        }

    }

    handleClick_type_remove() {

        if (this.state.name_type === null) {
            alert("Fill the blanked field");
        }
        else {
            fetch('http://localhost:3000/api/producer/devicetype/remove', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: 'username=' + this.state.producer + '&token=' + this.state.token + '&name_type=' + this.state.value_type
            })
                .then(response => response.json())
                .then(json => {
                    if (json.message === 'ok') {
                        alert("Removed type");
                    }
                    else {
                        alert("Problem type");

                    }
                }).catch(error => {
                console.error(error);
            });
            this.setState({
                component: '0',
                button_click_type_rem: 0

            });
        }

    }

    handleClick_user_history() {
        if (this.state.value_user === null) {
            alert("Fill the blanked field");
        }
        else {
            fetch('http://localhost:3000/api/user/history', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: 'username=' + this.state.producer + '&token=' + this.state.token + '&value_user=' + this.state.value_user
            })
                .then(response => response.json())
                .then(json => {
                    if (json.message === 'ok') {

                        number_rows_history = json.number_rows;
                        user_grid = json.history;
                        setTimeout(() => {
                            alert("User history found");
                            this.setState({
                                component: '8',
                                button_click_user_hist: 1,
                            })
                        }, 50)
                    }
                    else {
                        alert("Problem user");

                    }
                }).catch(error => {
                console.error(error);
            });


        }
    }

    handleClick_type_history() {
        if (this.state.value_type === null) {
            alert("Fill the blanked field");
        }
        else {
            fetch('http://localhost:3000/api/producer/devicetype/history', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: 'username=' + this.state.producer + '&token=' + this.state.token + '&value_type=' + this.state.value_type
            })
                .then(response => response.json())
                .then(json => {
                    if (json.message === 'ok') {

                        number_rows_history = json.number_rows;
                        type_grid = json.rows;
                        setTimeout(() => {
                            alert("Device type history found");
                            this.setState({
                                component: '7',
                                button_click_type_hist: 1,
                            })
                        }, 50)
                    }
                    else {
                        alert("Problem user");

                    }
                }).catch(error => {
                console.error(error);
            });


        }
    }

    handleClick_device_history() {
        if (this.state.value_device === null) {
            alert("Fill the blanked field");
        }
        else {
            fetch('http://localhost:3000/api/producer/deviceselected/history', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: 'username=' + this.state.producer + '&token=' + this.state.token + '&value_device=' + this.state.value_device
            })
                .then(response => response.json())
                .then(json => {
                    if (json.message === 'ok') {

                        number_rows_history = json.number_rows;
                        device_grid = json.rows;
                        setTimeout(() => {
                            alert("Device history found");
                            this.setState({
                                component: '10',
                                button_click_device_hist: 1,
                            })
                        }, 50)
                    }
                    else {
                        alert("Problem user");

                    }
                }).catch(error => {
                console.error(error);
            });


        }
    }

    handleClick_device_model_history() {
        fetch('http://localhost:3000/api/producer/devicemodel/history', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'username=' + this.state.producer + '&token=' + this.state.token + '&value_model=' + this.state.value_model_hist
        })
            .then(response => response.json())
            .then(json => {
                if (json.message === 'ok') {

                    model_grid = json.rows;
                    number_rows_history = json.number_rows;
                }
                else {
                    alert("Problem models");

                }
            }).catch(error => {
            console.error(error);
        });

        setTimeout(() => {
            alert("Model history found");
            this.setState({
                component: '12',
                button_click_model_hist: 1
            });
        }, 200)


    }


    rowGetter_user(i) {
        return user_grid[i];
    }

    rowGetter_type(i) {
        return type_grid[i];
    }

    rowGetter_device(i) {
        return device_grid[i];
    }

    rowGetter_model(i) {
        return model_grid[i];
    }

    api_producer_product_model_add() {

        if (this.state.button_click_model === 0) {

            this.setState({
                component: '1',
                button_click_model: 1
            });
        }
        else {
            this.setState({
                component: '0',
                button_click_model: 0

            });
        }
    }

    api_producer_product_model_remove() {
        if (this.state.button_click_model_rem === 0) {
            fetch('http://localhost:3000/api/producer/device/models', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: 'username=' + this.state.producer + '&token=' + this.state.token
            })
                .then(response => response.json())
                .then(json => {
                    if (json.message === 'ok') {

                        device_combobox = json.models;
                    }
                    else {
                        alert("Problem models");

                    }
                }).catch(error => {
                console.error(error);
            });

            setTimeout(() => {
                this.setState({
                    component: '2',
                    button_click_model_rem: 1
                });
            }, 500)

        }
        else {
            this.setState({
                component: '0',
                button_click_model_rem: 0

            });
        }
    }

    api_producer_device_model_history() {

        if (this.state.button_click_model_hist === 0) {
            fetch('http://localhost:3000/api/producer/device/models/all/ever', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: 'username=' + this.state.producer + '&token=' + this.state.token
            })
                .then(response => response.json())
                .then(json => {
                    if (json.message === 'ok') {

                        device_combobox_hist = json.models;

                    }
                    else {
                        alert("Problem models");

                    }
                }).catch(error => {
                console.error(error);
            });

            setTimeout(() => {
                this.setState({
                    component: '11',
                    button_click_model_hist: 1
                });
            }, 500)

        }
        else {
            this.setState({
                component: '0',
                button_click_model_hist: 0

            });
        }
    }

    api_producer_device_type_add() {
        if (this.state.button_click_type_hist === 0) {

            this.setState({
                component: '6',
                button_click_type_hist: 1
            });
        }
        else {
            this.setState({
                component: '0',
                button_click_type_hist: 0

            });
        }
    }

    api_producer_device_type_remove() {


        if (this.state.button_click_type_rem === 0) {

            fetch('http://localhost:3000/api/producer/device/types', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: 'username=' + this.state.producer + '&token=' + this.state.token
            })
                .then(response => response.json())
                .then(json => {
                    if (json.message === 'ok') {

                        type_combobox = json.models;
                    }
                    else {
                        alert("Problem models");

                    }
                }).catch(error => {
                console.error(error);
            });


            this.setState({
                component: '4',
                button_click_type_rem: 1
            });
        }
        else {
            this.setState({
                component: '0',
                button_click_type_rem: 0

            });
        }
    }

    api_producer_device_type_history() {
        if (this.state.button_click_type_hist === 0) {

            fetch('http://localhost:3000/api/producer/device/types', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: 'username=' + this.state.producer + '&token=' + this.state.token
            })
                .then(response => response.json())
                .then(json => {
                    if (json.message === 'ok') {

                        type_combobox = json.models;
                    }
                    else {
                        alert("Problem models");

                    }
                }).catch(error => {
                console.error(error);
            });

            this.setState({
                component: '6',
                button_click_type_add: 1
            });
        }
        else {
            this.setState({
                component: '0',
                button_click_type_add: 0

            });
        }
    }

    api_device_history() {
        if (this.state.button_click_device_hist === 0) {

            fetch('http://localhost:3000/api/producer/device/devices_all', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: 'username=' + this.state.producer + '&token=' + this.state.token
            })
                .then(response => response.json())
                .then(json => {
                    if (json.message === 'ok') {

                        all_device_combobox = json.devices;
                    }
                    else {
                        alert("Problem models");

                    }
                }).catch(error => {
                console.error(error);
            });
            setTimeout(() => {
                this.setState({
                    component: '9',
                    button_click_device_hist: 1
                })
            }, 500)
        }
        else {
            this.setState({
                component: '0',
                button_click_device_hist: 0

            });
        }
    }

    api_user_history() {
        if (this.state.button_click_user_hist === 0) {

            fetch('http://localhost:3000/api/producers/user_all', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: 'username=' + this.state.producer + '&token=' + this.state.token
            })
                .then(response => response.json())
                .then(json => {
                    if (json.message === 'ok') {

                        device_combobox_user = json.devices;
                    }
                    else {
                        alert("Problem models");

                    }
                }).catch(error => {
                console.error(error);
            });

            setTimeout(() => {
                this.setState({
                    component: '5',
                    button_click_user_hist: 1
                })
            }, 500)

        }
        else {
            this.setState({
                component: '0',
                button_click_user_hist: 0

            });
        }
    }

    api_producerlogout() {
        fetch('http://localhost:3000/api/producer/logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'username=' + this.state.producer + '&token=' + this.state.token + '&value_model=' + this.state.value_model_hist
        })
            .then(response => response.json())
            .then(json => {
                if (json.message === 'ok') {

                }
                else {
                    alert("Problem logout");

                }
            }).catch(error => {
            console.error(error);
        });
        window.location = "./";
    }

    onChangecombobox_device(value_device) {
        this.setState({value_device});
        this.state.value_device = value_device;
        console.log('Boolean Select value changed to', value_device);
    }

    onChangecombobox_user(value_user) {
        this.setState({value_user});
        this.state.value_user = value_user;
        console.log('Boolean Select value changed to', value_user);
    }

    onChangecombobox_model(value_model) {
        this.setState({value_model});
        this.state.value_model = value_model;
        console.log('Boolean Select value changed to', value_model);
    }

    onChangecombobox_model_hist(value_model_hist) {
        this.setState({value_model_hist});
        this.state.value_model_hist = value_model_hist;
        console.log('Boolean Select value changed to', value_model_hist);
    }

    onChangecombobox_type(value_type) {
        this.setState({value_type});
        this.state.value_type = value_type;
        console.log('Boolean Select value changed to', value_type);
    }

    api_init() {
        fetch('http://localhost:3000/api/producer/device/types', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'username=' + this.state.producer + '&token=' + this.state.token
        })
            .then(response => response.json())
            .then(json => {
                if (json.message === 'ok') {

                    type_combobox = json.models;
                }
                else {
                    alert("Problem models");

                }
            }).catch(error => {
            console.error(error);
        });

        fetch('http://localhost:3000/api/producer/device/models', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'username=' + this.state.producer + '&token=' + this.state.token
        })
            .then(response => response.json())
            .then(json => {
                if (json.message === 'ok') {

                    device_combobox = json.models;
                }
                else {
                    alert("Problem models");

                }
            }).catch(error => {
            console.error(error);
        });

    }

    /*device_combobox*/

    render() {


        let productModel;
        productModel = <MotionMenu
            type="vertical"
            margin={100}
            y={0}
            bumpy
            x={0}
            openSpeed={60}
            wing={false}
            reverse={false}
            onOpen={() => console.log('onOpen')}
            onClose={() => console.log('onClose')}
        >
            <div className="button" style={googlestyle}><i className="material-icons medium">speaker_group</i></div>
            <div className="button" style={smallstyle} onClick={(event) => this.api_producer_product_model_add()}><i
                className="fa fa-plus"/></div>
            <div className="button" style={smallstyle}
                 onClick={(event) => this.api_producer_product_model_remove()}><i
                className="fa fa-trash "/></div>
            <div className="button" style={smallstyle} onClick={(event) => this.api_producer_device_model_history()}>
                <i
                    className="fa fa-history "/></div>
        </MotionMenu>;


        let productType;
        productType = <MotionMenu
            type="vertical"
            margin={100}
            y={0}
            bumpy
            x={0}
            openSpeed={60}
            wing={false}
            reverse={false}
            onOpen={() => console.log('onOpen')}
            onClose={() => console.log('onClose')}
        >
            <div className="button" style={googlestyle}><i className="material-icons medium">devices_other </i>
            </div>
            <div className="button" style={smallstyle} onClick={(event) => this.api_producer_device_type_add()}><i
                className="fa fa-plus"/></div>
            <div className="button" style={smallstyle} onClick={(event) => this.api_producer_device_type_remove()}>
                <i
                    className="fa fa-trash "/></div>
            <div className="button" style={smallstyle} onClick={(event) => this.api_producer_device_type_history()}>
                <i
                    className="fa fa-history "/></div>

        </MotionMenu>;

        this.state.token = localStorage.getItem('token');
        this.state.producer = localStorage.getItem('username');
        this.api_init();

        if (this.state.token == null) {
            alert("Não tem sessão iniciada");
            window.location = "./";
        }

        let producerComponent;
        if (this.state.component === '0') {
            producerComponent = <br/>;
        }
        if (this.state.component === '1') {
            producerComponent =
                <div>
                    <MuiThemeProvider>
                        <div>
                            <AppBar title="Product Model"
                                    iconElementLeft={<i className=" fa fa-plus fa-adjust fa-3x"></i>}/>
                            <TextField hintText="Enter the model name" floatingLabelText="Name"
                                       onChange={(event, newValue) => this.setState({name_model: newValue})}

                            />
                            <br/>
                            <TextField hintText="Enter the product Stock" floatingLabelText="Stock"
                                       onChange={(event, newValue) => this.setState({stock: newValue})}

                            />
                            <br/>
                            <TextField hintText="Enter the product reference" floatingLabelText="Reference"
                                       onChange={(event, newValue) => this.setState({referencia: newValue})}

                            />
                            <br/>
                            <RaisedButton label="Submit" primary={true} style={submit_style}
                                          onClick={(event) => this.handleClick_model_add()}/>
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
            producerComponent =
                <div>
                    <MuiThemeProvider>
                        <div>
                            <AppBar title="Product Model"
                                    iconElementLeft={<i className="fa fa-minus-circle fa-adjust fa-3x"
                                                        aria-hidden="true"></i>}/>
                            <div className="section">
                                <h3 className="section-heading">{this.props.label}</h3>
                                <Select
                                    onChange={this.onChangecombobox_model}
                                    options={device_combobox}
                                    simpleValue
                                    value={this.state.value_model}
                                    clearable="false"
                                />
                            </div>
                            <br/>
                            <br/>
                            <br/>
                            <RaisedButton label="Submit" primary={true} style={submit_style}
                                          onClick={(event) => this.handleClick_model_remove()}/>
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
            producerComponent =
                <div>
                    <MuiThemeProvider>
                        <div>
                            <AppBar title="Device Type"
                                    iconElementLeft={<i className=" fa fa-plus fa-adjust fa-3x"></i>}/>
                            <TextField hintText="Enter your Name" floatingLabelText="Name"
                                       onChange={(event, newValue) => this.setState({Device_type: newValue})}

                            />
                            <br/>
                            <RaisedButton label="Submit" primary={true} style={submit_style}
                                          onClick={(event) => this.handleClick_type_add()}/>
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
        if (this.state.component === '4') {
            producerComponent =
                <div>
                    <MuiThemeProvider>
                        <div>
                            <AppBar title="Device Type"
                                    iconElementLeft={<i className=" fa fa-minus-circle fa-adjust fa-3x"></i>}/>
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
                            <br/>
                            <br/>
                            <RaisedButton label="Submit" primary={true} style={submit_style}
                                          onClick={(event) => this.handleClick_type_remove()}/>
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
            producerComponent =
                <div>
                    <MuiThemeProvider>
                        <div>
                            <AppBar title="User History"
                                    iconElementLeft={<i className=" fa fa-address-card-o fa-adjust fa-3x"></i>}/>
                            <div className="section">
                                <h3 className="section-heading">{this.props.label}</h3>
                                <Select
                                    onChange={this.onChangecombobox_user}
                                    options={device_combobox_user}
                                    simpleValue
                                    value={this.state.value_user}
                                    clearable="false"
                                />
                            </div>
                            <br/>
                            <br/>
                            <br/>
                            <RaisedButton label="Submit" primary={true} style={submit_style}
                                          onClick={(event) => this.handleClick_user_history()}/>
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
        if (this.state.component === '6') {
            producerComponent =
                <div>
                    <MuiThemeProvider>
                        <div>
                            <AppBar title="Device type History"
                                    iconElementLeft={<i className=" fa fa-address-card-o fa-adjust fa-3x"></i>}/>
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
                            <br/>
                            <br/>
                            <RaisedButton label="Submit" primary={true} style={submit_style}
                                          onClick={(event) => this.handleClick_type_history()}/>
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
        if (this.state.component === '7') {
            producerComponent =
                <div>
                    <MuiThemeProvider >
                        <div >
                            <div className="activity">
                                <AppBar
                                    title="Device type history"
                                    iconElementLeft={<i className=" fa fa-address-card-o fa-adjust fa-3x"></i>}

                                />
                                <ReactDataGrid

                                    columns={columns_grid_values_type}
                                    rowsCount={number_rows_history}
                                    minHeight={200}
                                    rowGetter={this.rowGetter_type}

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
        if (this.state.component === '8') {
            producerComponent =
                <div>
                    <MuiThemeProvider >
                        <div >
                            <div className="activity">
                                <AppBar
                                    title="User history"
                                    iconElementLeft={<i className=" fa fa-address-card-o fa-adjust fa-3x"></i>}

                                />
                                <ReactDataGrid

                                    columns={columns_grid_values}
                                    rowsCount={number_rows_history}
                                    minHeight={200}
                                    rowGetter={this.rowGetter_user}

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
        if (this.state.component === '9') {
            producerComponent =
                <div>
                    <MuiThemeProvider>
                        <div>
                            <AppBar title="Device History"
                                    iconElementLeft={<i className=" fa fa-address-card-o fa-adjust fa-3x"></i>}/>
                            <div className="section">
                                <h3 className="section-heading">{this.props.label}</h3>
                                <Select
                                    onChange={this.onChangecombobox_device}
                                    options={all_device_combobox}
                                    simpleValue
                                    value={this.state.value_device}
                                    clearable="false"
                                />
                            </div>
                            <br/>
                            <br/>
                            <br/>
                            <RaisedButton label="Submit" primary={true} style={submit_style}
                                          onClick={(event) => this.handleClick_device_history()}/>
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
        if (this.state.component === '10') {
            producerComponent =
                <div>
                    <MuiThemeProvider >
                        <div >
                            <div className="activity">
                                <AppBar
                                    title="Device history"
                                    iconElementLeft={<i className=" fa fa-address-card-o fa-adjust fa-3x"></i>}

                                />
                                <ReactDataGrid

                                    columns={columns_grid_values_type}
                                    rowsCount={number_rows_history}
                                    minHeight={200}
                                    rowGetter={this.rowGetter_device}

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
        if (this.state.component === '11') {
            producerComponent =
                <div>
                    <MuiThemeProvider>
                        <div>
                            <AppBar title="Product Model"
                                    iconElementLeft={<i className=" fa fa-address-card-o fa-adjust fa-3x"></i>}/>
                            <div className="section">
                                <h3 className="section-heading">{this.props.label}</h3>
                                <Select
                                    onChange={this.onChangecombobox_model_hist}
                                    options={device_combobox_hist}
                                    simpleValue
                                    value={this.state.value_model_hist}
                                    clearable="false"
                                />
                            </div>
                            <br/>
                            <br/>
                            <br/>
                            <RaisedButton label="Submit" primary={true} style={submit_style}
                                          onClick={(event) => this.handleClick_device_model_history()}/>
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
        if (this.state.component === '12') {
            producerComponent =
                <div>
                    <MuiThemeProvider >
                        <div >
                            <div className="activity">
                                <AppBar
                                    title="Model history"
                                    iconElementLeft={<i className=" fa fa-address-card-o fa-adjust fa-3x"></i>}

                                />
                                <ReactDataGrid

                                    columns={columns_grid_values_model}
                                    rowsCount={number_rows_history}
                                    minHeight={100}
                                    rowGetter={this.rowGetter_model}

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

        return (
            <div>


                {producerComponent}


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
                    <div className="button"><i className="fa fa-bars fa-2x"/></div>

                    {productModel}

                    <div className="button" style={googlestyle} onClick={(event) => this.api_device_history()}><i
                        className="material-icons medium">developer_board</i></div>

                    {productType}

                    <div className="button" style={googlestyle} onClick={(event) => this.api_user_history()}><i
                        className="material-icons medium">assignment_ind</i></div>


                </MotionMenu>
                <MuiThemeProvider>
                <RaisedButton label="Logout" primary={true} style={logoutstyle}
                              onClick={(event) => this.api_producerlogout()}/>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default MenuProducer;


/*<div className="button" style={style}><i className="fa fa-globe" /></div>
 <div className="button" style={style}><i className="fa fa-plug" /></div>*/