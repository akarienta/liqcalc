import React from 'react';
import _ from 'lodash';

import {toFloat} from '../helpers';

import RecipeItem from './RecipeItem';
import Button from './Button';
import Container from './Container';

export default class Recipe extends React.Component {
    static propTypes = {
        onButtonClick: React.PropTypes.func.isRequired
    };

    state = {
        fields: {
            nicotineBase: '6',
            requestedConcentration: '2',
            value: '10',
            flavour: '10'
        },
        fieldErrors: {}
    };

    onInputChange = ({name, value, error}) => {
        const fields = this.state.fields;
        const fieldErrors = this.state.fieldErrors;
        delete fieldErrors.general;

        fields[name] = value;
        fieldErrors[name] = error;

        if (!_.isUndefined(error)) {
            fieldErrors[name] = error;
        } else {
            delete fieldErrors[name];
        }

        this.setState({fields, fieldErrors});
    };

    onButtonClick = () => {
        const isSomeValueEmpty = _(this.state.fields).toArray().value().some((value) => {
            return value === '';
        });
        const fieldErrors = {};

        if (isSomeValueEmpty) {
            fieldErrors.general = 'Musíte vyplnit všechna pole.';
            this.setState({fieldErrors});
            return;
        } else {
            this.setState({fieldErrors});
        }

        const nicotineBase = toFloat(this.state.fields.nicotineBase);
        const requestedConcentration = toFloat(this.state.fields.requestedConcentration);
        const value = toFloat(this.state.fields.value);
        const flavour = toFloat(this.state.fields.flavour);

        this.props.onButtonClick({nicotineBase, requestedConcentration, value, flavour});
    };

    isButtonDisabled = () => {
        return Object.keys(this.state.fieldErrors).length > 0;
    };

    render() {
        return (
            <form className='ui large recipe form error'>
                <Container
                    headline='Nový recept'
                >
                    {!_.isEmpty(this.state.fieldErrors) ? (
                        <div className='column'>
                            <div className='ui error message'>
                                <ul className='list'>
                                    {_(this.state.fieldErrors)
                                        .toArray()
                                        .value()
                                        .map((error, i) => <li key={i}>{error}</li>)}
                                </ul>
                            </div>
                        </div>
                    ) : ''}
                    <RecipeItem
                        label='Koncentrace nikotinové báze'
                        unit='mg/ml'
                        name='nicotineBase'
                        value={this.state.fields.nicotineBase}
                        onChange={this.onInputChange}
                    />
                    <RecipeItem
                        label='Cílová koncentrace nikotinu'
                        unit='mg/ml'
                        name='requestedConcentration'
                        value={this.state.fields.requestedConcentration}
                        onChange={this.onInputChange}
                    />
                    <RecipeItem
                        label='Objem lahvičky'
                        unit='ml'
                        name='value'
                        value={this.state.fields.value}
                        onChange={this.onInputChange}
                    />
                    <RecipeItem
                        label='Koncentrace příchutě'
                        unit='%'
                        name='flavour'
                        value={this.state.fields.flavour}
                        onChange={this.onInputChange}
                    />
                    <Button
                        label="Vygenerovat recept"
                        onClick={this.onButtonClick}
                        isDisabled={this.isButtonDisabled()}
                    />
                </Container>
            </form>
        )
    }
}