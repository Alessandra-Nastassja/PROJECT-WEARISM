import React from 'react';
import { render } from '@testing-library/react';

import Cards from '../components/cards/cards';

const mockProductData = {

}

describe('Products APP', () => {
    it('Should render Products component', () => {
        const { getByTestId } = render(<Cards data={mockProductData}/>);
        const container = getByTestId('product');

        expect(container).toHaveClass('card');
        expect(container.children.length).toBe(2);
    })
})