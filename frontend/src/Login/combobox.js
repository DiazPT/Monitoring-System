import React from 'react';
import Select from 'react-select';

var ValuesAsBooleansField = React.createClass({
    displayName: 'ValuesAsBooleansField',
    propTypes: {
        label: React.PropTypes.string
    },
    getInitialState () {
        return {
            options: [
                { value: 'user', label: 'User', clearableValue: false },
                { value: 'producer', label: 'Producer', clearableValue: false }
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

module.exports = ValuesAsBooleansField;