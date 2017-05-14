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

var device_combobox = [];
var type_combobox = [];

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

class MenuProducer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            //debug : 'IS Work 2 Front End - Demo Version\n'
            producer: '',
            name_model: '',
            token: '',
            button_click_model: 0,
            component: '0',
            button_click_model_rem: 0,
            button_click_type_rem: 0,
            button_click_type_add: 0,
        }

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


            this.setState({
                component: '2',
                button_click_model_rem: 1
            });
        }
        else {
            this.setState({
                component: '0',
                button_click_model_rem: 0

            });
        }
    }

    api_producer_device_type_add() {
        if (this.state.button_click_type_add === 0) {

            this.setState({
                component: '3',
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

    }

    api_device_history() {

    }

    api_user_history() {

    }

    onChangecombobox(value) {
        this.setState({value});
        this.state.value = value;
        console.log('Boolean Select value changed to', value);
    }

    api_init(){
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
                            <TextField hintText="Enter your Name" floatingLabelText="Name"
                                       onChange={(event, newValue) => this.setState({name_model: newValue})}

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
                                    onChange={this.onChangecombobox}
                                    options={device_combobox}
                                    simpleValue
                                    value={this.state.value}
                                    clearable="false"
                                />
                            </div>
                            <br/>
                            <br/>
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
                                    onChange={this.onChangecombobox}
                                    options={type_combobox}
                                    simpleValue
                                    value={this.state.value}
                                    clearable="false"
                                />
                            </div>
                            <br/>
                            <br/>
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
        if (this.state.component === '5') {
            producerComponent =
                <div>
                    <MuiThemeProvider>
                        <div>
                            <AppBar title="Device Type"
                                    iconElementLeft={<i className=" fa fa-plus fa-adjust fa-3x"></i>}/>
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
                            <br/>
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
        if (this.state.component === '6') {
            producerComponent =
                <div>
                    <MuiThemeProvider>
                        <div>
                            <AppBar title="Device Type"
                                    iconElementLeft={<i className=" fa fa-plus fa-adjust fa-3x"></i>}/>
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
                            <br/>
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
        if (this.state.component === '7') {
            producerComponent =
                <div>
                    <MuiThemeProvider>
                        <div>
                            <AppBar title="Device Type"
                                    iconElementLeft={<i className=" fa fa-plus fa-adjust fa-3x"></i>}/>
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
                            <br/>
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
            </div>
        );
    }
}

export default MenuProducer;


/*<div className="button" style={style}><i className="fa fa-globe" /></div>
 <div className="button" style={style}><i className="fa fa-plug" /></div>*/