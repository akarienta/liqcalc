import React from 'react';
import classNames from 'classnames';

import '../styles/ReciepeItem.css'

import {validate} from  '../helpers';

export default class RecipeItem extends React.Component {
    static defaultProps = {
        value: '',
        hasError: false
    };

    static propTypes = {
        label: React.PropTypes.string.isRequired,
        unit: React.PropTypes.string.isRequired,
        value: React.PropTypes.string,
        name: React.PropTypes.string.isRequired,
        onChange: React.PropTypes.func.isRequired,
        hasError: React.PropTypes.bool
    };

    state = {
        value: this.props.value
    };

    componentWillReceiveProps(update) {
        this.setState({value: update.value});
    }

    onChange = (evt) => {
        const name = this.props.name;
        const value = evt.target.value;
        const error = validate(value, this.props.label);

        this.props.onChange({name, value, error});
    };

    focusInput = () => {
        this.input.focus();
    };

    render() {
        const className = classNames(
            'ui',
            'right',
            'labeled',
            'input',
            {'error': this.props.hasError}
        );
        return (
            <div className='RecipeItem column'>
                <div className={className}>
                    <div
                        className='ui label'
                        onClick={this.focusInput}
                    >
                        <div>
                            {this.props.label}
                        </div>
                    </div>
                    <input type='text'
                           value={this.state.value}
                           ref={(input) => this.input = input}
                           onChange={this.onChange}
                    />
                    <div
                        className='ui basic label'
                        onClick={this.focusInput}
                    >
                        {this.props.unit}
                    </div>
                </div>
            </div>
        );
    }
}