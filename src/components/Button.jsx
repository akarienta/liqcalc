import React from 'react';

export default class Button extends React.Component {
    static defaultProps = {
        isDisabled: false
    };

    static propTypes = {
        label: React.PropTypes.string.isRequired,
        onClick: React.PropTypes.func.isRequired,
        isDisabled: React.PropTypes.bool
    };

    render() {
        return (
            <div className='column'>
                <div
                    className={'ui fluid large teal submit button' + (this.props.isDisabled ? ' disabled' : '')}
                    onClick={this.props.onClick}
                >
                    {this.props.label}
                </div>
            </div>
        )
    }
}