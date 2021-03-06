import React from 'react';
import _ from 'lodash';

import '../styles/Recipe.css'

import {toFloat} from '../helpers';

import RecipeItem from './RecipeItem';
import Button from './Button';
import Container from './Container';

const Field = {
    NICOTINE_BASE: 'nicotineBase',
    REQ_CONCENTRATION: 'requestedConcentration',
    VALUE: 'value',
    FLAVOUR: 'flavour'
};

export default class Recipe extends React.Component {
    static propTypes = {
        onButtonClick: React.PropTypes.func.isRequired
    };

    state = {
        fields: {},
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
        const nicotineBase = toFloat(this.state.fields.nicotineBase);
        const requestedConcentration = toFloat(this.state.fields.requestedConcentration);
        const value = toFloat(this.state.fields.value);
        const flavour = toFloat(this.state.fields.flavour);

        const nicotineBaseRes = requestedConcentration * value / nicotineBase;
        const flavourRes = flavour * value / 100;
        const noNicotineBaseRes = ((1 - requestedConcentration / nicotineBase) * value) - flavourRes;

        const fieldErrors = {};

        if (Object.keys(this.state.fields).length !== 4) {
            fieldErrors.general = 'Musíte vyplnit všechna pole.';
        } else if (requestedConcentration >= nicotineBase) {
            fieldErrors.general = <span>Ze zadaných hodnot nelze vygenerovat recept. <b>Koncentrace nikotinové báze</b> musí být vyšší než <b>cílová koncentrace nikotinu</b>.</span>;
        } else if (noNicotineBaseRes < 0) {
            fieldErrors.general = <span>Ze zadaných hodnot nelze vygenerovat recept. Zkuste snížit <b>cílovou koncentraci nikotinu</b> nebo <b>koncentraci příchutě</b>.</span>;
        } else if (Math.round(flavourRes) === 0){
            fieldErrors.general = <span>Ze zadaných hodnot nelze vygenerovat recept. Zkuste navýšit <b>objem lahvičky</b>.</span>;
        }

        this.setState({fieldErrors}, () => {
            if (_.isEmpty(this.state.fieldErrors)) {
                this.props.onButtonClick({nicotineBaseRes, noNicotineBaseRes, flavourRes, value});
            }
        });
    };

    isButtonDisabled = () => {
        return Object.keys(this.state.fieldErrors).length > 0;
    };

    onReset = () => {
        this.setState({fields: {}, fieldErrors: {}});
    };

    hasError = (fieldName) => {
        return this.state.fieldErrors.hasOwnProperty(fieldName);
    };

    render() {
        return (
            <form className='Recipe ui large form error'>
                <Container
                    headline='Nový recept'
                >
                    <RecipeItem
                        label='Koncentrace nikotinové báze'
                        unit='mg/ml'
                        name={Field.NICOTINE_BASE}
                        value={this.state.fields[Field.NICOTINE_BASE]}
                        onChange={this.onInputChange}
                        hasError={this.hasError(Field.NICOTINE_BASE)}
                    />
                    <RecipeItem
                        label='Cílová koncentrace nikotinu'
                        unit='mg/ml'
                        name={Field.REQ_CONCENTRATION}
                        value={this.state.fields[Field.REQ_CONCENTRATION]}
                        onChange={this.onInputChange}
                        hasError={this.hasError(Field.REQ_CONCENTRATION)}
                    />
                    <RecipeItem
                        label='Objem lahvičky'
                        unit='ml'
                        name={Field.VALUE}
                        value={this.state.fields[Field.VALUE]}
                        onChange={this.onInputChange}
                        hasError={this.hasError(Field.VALUE)}
                    />
                    <RecipeItem
                        label='Koncentrace příchutě'
                        unit='%'
                        name={Field.FLAVOUR}
                        value={this.state.fields[Field.FLAVOUR]}
                        onChange={this.onInputChange}
                        hasError={this.hasError(Field.FLAVOUR)}
                    />
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
                    <div className="column">
                        <div className="ui grid buttons">
                            <div className="twelve wide column">
                                <Button
                                    onClick={this.onButtonClick}
                                    isDisabled={this.isButtonDisabled()}
                                >
                                    Vygenerovat recept
                                </Button>
                            </div>
                            <div className="four wide column">
                                <Button
                                    isPrimary={false}
                                    onClick={this.onReset}
                                >
                                    <i className='trash icon'/>
                                </Button>
                            </div>
                        </div>
                    </div>
                </Container>
            </form>
        )
    }
}