import React from 'react';
import Select from 'react-select';

var Combobox_state = React.createClass({
    displayName: 'combobox_state',
    propTypes: {
        label: React.PropTypes.string
    },
    getInitialState () {
        return {
            options: [
                { value: 'on', label: 'ON'},
                { value: 'off', label: 'OFF'},
                { value: 'unmonitored', label: 'UNMONITORED'}
            ],
            value: null,

        };
    },
    onChange(value) {
        this.setState({ value });
        console.log('Boolean Select value changed to', value);
        localStorage.setItem('combobox',value)
    },
    render () {

        return (
            <div className="section">
                <h3 className="section-heading">{this.props.label}</h3>
                <Select
                    onChange={this.onChange}
                    options={this.state.options}
                    simpleValue
                    value={this.state.value}
                    clearable="false"
                />
            </div>
        );
    }
});

module.exports = Combobox_state;