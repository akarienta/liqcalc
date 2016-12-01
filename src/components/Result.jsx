import React from 'react';

import ResultItem from './ResultItem';
import Container from './Container';
import Button from './Button';

export default class Result extends React.Component {
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
                                label='Nikotinová báze'
                                value={5}
                                drops={100}
                                percentage={50}
                            />
                            <ResultItem
                                label='Nulka'
                                value={3.6}
                                drops={71}
                                percentage={36}
                            />
                            <ResultItem
                                label='Příchuť'
                                value={1.4}
                                drops={28}
                                percentage={14}
                            />
                        </tbody>
                    </table>
                </div>
                <Button
                    label="Nový recept"
                />
            </Container>
        )
    }
}