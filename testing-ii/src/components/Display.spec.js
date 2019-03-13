import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-testing-library'; 
import 'jest-dom/extend-expect'; 
import Display from './Display';

describe('<Display />', () => {
    it('should render number of strikes and balls', () => {
        const { getByText } = render(<Display />);

        const balls = getByText(/balls/i);
        const strikes = getByText(/strikes/i);

        expect(getByText(/balls/i)).toBeInTheDocument();
        expect(getByText(/strikes/i)).toBeInTheDocument();

    })
})

