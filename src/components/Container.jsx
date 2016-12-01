import React from 'react';

export default class Container extends React.Component {
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