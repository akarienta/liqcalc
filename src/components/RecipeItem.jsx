import React from 'react';
import _ from 'lodash';

import '../styles/ReciepeItem.css'

import {validate} from  '../helpers';

export default class RecipeItem extends React.Component {
    static propTypes = {
        label: React.PropTypes.string.isRequired,
        unit: React.PropTypes.string.isRequired,
        value: React.PropTypes.string.isRequired,
        name: React.PropTypes.string.isRequired,
        onChange: React.PropTypes.func.isRequired
    };

    state = {
        value: this.props.value,
        hasError: false
    };

    onChange = (evt) => {
        const name = this.props.name;
        const value = evt.target.value;
        const error = validate(value, this.props.label);

        this.setState({value: value, hasError: !_.isUndefined(error)});

        this.props.onChange({name, value, error});
    };

    render() {
        return (
            <div className='RecipeItem column'>
                <div className={'ui right labeled input' + (this.state.hasError ? ' error' : '')}>
                    <div className='ui label'>{this.props.label}</div>
                    <input type='text'
                           value={this.state.value}
                           onChange={this.onChange}
                    />
                    <div className='ui basic label'>{this.props.unit}</div>
                </div>
            </div>
        );
    }
}