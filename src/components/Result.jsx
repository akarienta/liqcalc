import React from 'react';

import ResultItem from './ResultItem';
import Container from './Container';
import Button from './Button';
import {ResultDTO} from '../dtos';

export default class Result extends React.Component {
    static propTypes = {
        onButtonClick: React.PropTypes.func.isRequired,
        result: React.PropTypes.instanceOf(ResultDTO).isRequired
    };

    render() {
        return (
            <Container
                headline='Váš recept'
            >
                <div className='ui result container'>
                    <table className='ui celled striped result table unstackable'>
                        <thead>
                            <tr>
                                <th>Igredience</th>
                                <th>ml</th>
                                <th>
                                    <i className='tint icon'/>
                                </th>
                                <th>%</th>
                            </tr>
                        </thead>
                        <tbody>
                            <ResultItem
                                item={this.props.result.nicotineBase}
                            />
                            <ResultItem
                                item={this.props.result.noNicotineBase}
                            />
                            <ResultItem
                                item={this.props.result.flavour}
                            />
                        </tbody>
                    </table>
                </div>
                <Button
                    onClick={this.props.onButtonClick}
                >
                    Nový recept
                </Button>
            </Container>
        )
    }
}