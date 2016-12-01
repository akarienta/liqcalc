import React from 'react';

import '../styles/App.css';
import logo from '../logo.svg';

import Recipe from './Recipe';
import Result from './Result';

export default class App extends React.Component {
    state = {
        recipeIsGenerated: false
    };

    onGenerateRecipe = ({nicotineBase, requestedConcentration, value, flavour}) => {
        console.log(nicotineBase, requestedConcentration, value, flavour);
        this.setState({recipeIsGenerated: true});
    };

    onNewRecipe = () => {
        this.setState({recipeIsGenerated: false});
    };

    render() {
        return (
            <div className='App ui middle aligned center aligned grid'>
                <div className='seven wide computer ten wide tablet column sixteen wide mobile'>
                    <h1 className='ui teal image header'>
                        <img src={logo} className='image' alt='Application logo'/>
                        <div className='content'>
                            LiqCalc
                        </div>
                    </h1>
                    {this.state.recipeIsGenerated ? (
                        <Result
                            onButtonClick={this.onNewRecipe} />
                    ) : (
                        <Recipe
                            onButtonClick={this.onGenerateRecipe}
                        />
                    )}
                </div>
            </div>
        );
    }
}