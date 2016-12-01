import React from 'react';

import RecipeItem from './RecipeItem';
import Button from './Button';
import Container from './Container';

export default class Recipe extends React.Component {
    render() {
        return (
            <form className='ui large recipe form error'>
                <Container
                    headline='Nový recept'
                >
                    <div className='column'>
                        <div className='ui error message'>
                            <ul className='list'>
                                <li>Totoj je nějaká chybová hláška.</li>
                                <li>Totoj je další chybová hláška.</li>
                            </ul>
                        </div>
                    </div>
                    <RecipeItem
                        label='Koncentrace nikotinové báze'
                        unit='mg/ml'
                    />
                    <RecipeItem
                        label='Cílová koncentrace nikotinu'
                        unit='mg/ml'
                    />
                    <RecipeItem
                        label='Objem lahvičky'
                        unit='ml'
                    />
                    <RecipeItem
                        label='Koncentrace příchutě'
                        unit='%'
                    />
                    <Button
                        label="Vygenerovat recept"
                    />
                </Container>
            </form>
        )
    }
}