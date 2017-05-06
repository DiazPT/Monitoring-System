//this.api_producer_register = this.api_producer_register.bind(this);
//this.api_producer_product_model_add = this.api_producer_product_model_add.bind(this);
//this.api_producer_product_model_remove = this.api_producer_product_model_remove.bind(this);
//this.api_producer_device_type_add = this.api_producer_device_type_add.bind(this);
//this.api_producer_device_type_remove = this.api_producer_device_type_remove.bind(this);
//this.api_producer_device_type_history = this.api_producer_device_type_history.bind(this);
//this.api_user_register = this.api_user_register.bind(this);
//this.api_user_devices = this.api_user_devices.bind(this);
//this.api_user_history = this.api_user_history.bind(this);


import React, { Component, PropTypes } from 'react';
import MotionMenu from './index';
import history from '../history';


const style = {
    backgroundColor: '#01A9DB',

};


const smallstyle = {
    backgroundColor: '#A9F5BC',

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
            username:'',
            password:''
        }


        this.api_producer_product_model_add = this.api_producer_product_model_add.bind(this);
        this.api_producer_product_model_remove = this.api_producer_product_model_remove.bind(this);
        this.api_producer_device_type_add = this.api_producer_device_type_add.bind(this);
        this.api_producer_device_type_remove = this.api_producer_device_type_remove.bind(this);
        this.api_producer_device_type_history = this.api_producer_device_type_history.bind(this);
        this.api_device_history = this.api_device_history.bind(this);
        this.api_user_history = this.api_user_history.bind(this);

    }





    api_producer_product_model_add(){

    }

    api_producer_product_model_remove(){

    }

    api_producer_device_type_add(){

    }

    api_producer_device_type_remove(){

    }

    api_producer_device_type_history(){

    }

    api_device_history(){

    }

    api_user_history(){

    }


    render() {
        let productModel;
        productModel= <MotionMenu
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
            <div className="button" style={googlestyle}  ><i className="material-icons medium" >speaker_group</i></div>
            <div className="button" style={smallstyle} onClick={(event) => this.api_producer_product_model_add()}><i className="fa fa-plus" /></div>
            <div className="button" style={smallstyle} onClick={(event) => this.api_producer_product_model_remove()}><i className="fa fa-trash " /></div>
        </MotionMenu>;



         let productType;
         productType= <MotionMenu
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
             <div className="button" style={googlestyle}  ><i className="material-icons medium">devices_other </i></div>
             <div className="button" style={smallstyle} onClick={(event) => this.api_producer_device_type_add()}><i className="fa fa-plus" /></div>
             <div className="button" style={smallstyle} onClick={(event) => this.api_producer_device_type_remove()}><i className="fa fa-trash " /></div>
             <div className="button" style={smallstyle} onClick={(event) => this.api_producer_device_type_history()}><i className="fa fa-history " /></div>

         </MotionMenu>;


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

                {productModel}

                <div className="button" style={googlestyle} onClick={(event) => this.api_device_history()}><i className="material-icons medium" >developer_board</i></div>

                {productType}

                <div className="button" style={googlestyle} onClick={(event) => this.api_user_history()}><i className="material-icons medium" >assignment_ind</i></div>




            </MotionMenu>
        );
        //}

    }
}
export default MenuProducer;


/*<div className="button" style={style}><i className="fa fa-globe" /></div>
 <div className="button" style={style}><i className="fa fa-plug" /></div>*/