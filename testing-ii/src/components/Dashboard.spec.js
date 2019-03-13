import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from 'react-testing-library'; 
import 'jest-dom/extend-expect'; 
import Dashboard from './Dashboard'

describe('Dashboard />', () => {
    it('should fire click events', () => {
        const { getByTestId } = render(<Dashboard />);

        const strike = getByTestId('strikebtn')
        const ball = getByTestId('ballbtn')
        const hit = getByTestId('hitbtn')
        const foul = getByTestId('foulbtn')

        fireEvent.click(strike);
        fireEvent.click(ball);
        fireEvent.click(hit);
        fireEvent.click(foul);
        
        // expect(getByTestId(/strike/i)).toBeInDocument();
        // expect(getByTestId(/ball/i)).toBeInDocument();
        // expect(getByTestId(/hit/i)).toBeInDocument();
        // expect(getByTestId(/foul/i)).toBeInDocument();

    })
})