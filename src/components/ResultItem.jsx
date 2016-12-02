import React from 'react';
import {ResultItemDTO} from '../dtos';

export default class ResultItem extends React.Component {
    static propTypes = {
        item: React.PropTypes.instanceOf(ResultItemDTO).isRequired
    };

    render() {
        return (
            <tr>
                <td>{this.props.item.label}</td>
                <td>{this.props.item.getValue()}</td>
                <td>{this.props.item.getDrops()}</td>
                <td>{this.props.item.getPercentage()}</td>
            </tr>
        )
    }
}
