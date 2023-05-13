import React from 'react';
import {
    render, screen, fireEvent,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import '@testing-library/jest-dom';
import { itemsDefinition } from '../services/pointsService';
import App from './App';
import * as actions from '../redux/dashboard/actions';

describe('App component test', () => {
    beforeEach(() => {
        render(<Provider store={store}>
            <App />
        </Provider>);
    });

    it('should render header components', () => {
        const headerElement: HTMLElement = screen.getByText('Kahoot! Points');
        expect(headerElement).toBeInTheDocument();
    });

    it('should render items from itemsDefinition on the board', () => {
        const liTags: HTMLLIElement[] = screen.getAllByRole('tab');
        expect(liTags.length).toEqual(Object.keys(itemsDefinition).length);
    });

    it('should trigger the action onItemClick and update the resultBoard on item click', () => {
        const onItemClickMock = jest.spyOn(actions, 'onItemClick');
        expect(screen.getByText('No items collected!')).toBeInTheDocument();

        const itemA: HTMLLIElement = screen.getByText('A');
        fireEvent.click(itemA);
        expect(onItemClickMock).toHaveBeenCalledWith('A');
        expect(screen.getByText('New Game')).toBeInTheDocument();
    });
});
