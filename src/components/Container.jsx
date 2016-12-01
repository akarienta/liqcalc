import React from 'react';

export default class Container extends React.Component {
    static propTypes = {
        headline: React.PropTypes.string.isRequired,
        children: React.PropTypes.oneOfType([
            React.PropTypes.arrayOf(React.PropTypes.node).isRequired,
            React.PropTypes.node.isRequired
        ])
    };

    render() {
        return (
            <div className='ui stacked segment'>
                <div className='ui one column grid'>
                    <div className='column'>
                        <h2>{this.props.headline}</h2>
                    </div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}