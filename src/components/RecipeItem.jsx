import React from 'react';

import '../styles/ReciepeItem.css'

const propTypes = {
    label: React.PropTypes.string.isRequired,
    unit: React.PropTypes.string.isRequired
};

class RecipeItem extends React.Component {
    render() {
        return (
            <div className='RecipeItem column'>
                <div className='ui right labeled input'>
                    <div className='ui label'>{this.props.label}</div>
                    <input type='text'/>
                    <div className='ui basic label'>{this.props.unit}</div>
                </div>
            </div>
        );
    }
}

RecipeItem.propTypes = propTypes;

export default RecipeItem;