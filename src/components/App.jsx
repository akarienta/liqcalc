import React from 'react';

import '../styles/App.css';
import logo from '../logo.svg';

import Recipe from './Recipe';
import Result from './Result';

export default class App extends React.Component {
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
                    <Recipe/>
                    <Result/>
                </div>
            </div>
        );
    }
}