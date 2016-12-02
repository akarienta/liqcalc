import React from 'react';
import classNames from 'classnames';

export default class Button extends React.Component {
    static defaultProps = {
        isDisabled: false,
        isPrimary: true
    };

    static propTypes = {
        onClick: React.PropTypes.func.isRequired,
        isDisabled: React.PropTypes.bool,
        children: React.PropTypes.node.isRequired,
        isPrimary: React.PropTypes.bool
    };

    render() {
        const className = classNames(
            'ui',
            'fluid',
            'large',
            'submit',
            'button',
            'icon',
            {'disabled': this.props.isDisabled},
            {'teal': this.props.isPrimary}
        );
        return (
            <div className='column'>
                <div
                    className={className}
                    onClick={this.props.onClick}
                >
                    {this.props.children}
                </div>
            </div>
        )
    }
}