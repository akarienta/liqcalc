import React from 'react';

const propTypes = {
    label: React.PropTypes.string.isRequired
};

class Button extends React.Component {
    render() {
        return (
            <div className='column'>
                <div className='ui fluid large teal submit button'>{this.props.label}</div>
            </div>
        )
    }
}

Button.propTypes = propTypes;

export default Button;