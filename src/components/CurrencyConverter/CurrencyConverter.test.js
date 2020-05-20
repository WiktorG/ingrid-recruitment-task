import React from 'react';
import { screen, waitForElement, fireEvent } from '@testing-library/react';
import { renderWithThemeAndReduxProvider } from '~/helpers/testHelpers';
import api from '~/etc/api';

import CurrencyConverter from './CurrencyConverter';

import currencyValid from '~/mocks/currencyValid';

jest.mock('~/etc/api');

beforeEach(() => {
    jest.restoreAllMocks();
});

test('component should render', async () => {
    renderWithThemeAndReduxProvider(<CurrencyConverter />);
    const converterNode = screen.getByTestId('CurrencyConverter');
    expect(converterNode).toBeInTheDocument();
});

test('component should calculate results when user inputs value into initial Input', async () => {
    jest.spyOn(api.currencies, 'latest').mockImplementation(() => Promise.resolve({ data: currencyValid }));
    renderWithThemeAndReduxProvider(<CurrencyConverter />);
    
    const initialInputNode = screen.getByTestId('InitialInput');
    const convertedInputNode = screen.getByTestId('ConvertedInput');

    await expect(api.currencies.latest).toHaveBeenCalled();
    expect(screen.getByText(/0.219731927 PLN/)).toBeInTheDocument();

    fireEvent.change(initialInputNode, { target: { value: '20' } });
    expect(convertedInputNode.value).toBe('4.39');
});

test('component should recalculate results when user inputs value into converted Input', async () => {
    jest.spyOn(api.currencies, 'latest').mockImplementation(() => Promise.resolve({ data: currencyValid }));
    renderWithThemeAndReduxProvider(<CurrencyConverter />);

    const initialInputNode = screen.getByTestId('InitialInput');
    const convertedInputNode = screen.getByTestId('ConvertedInput');

    await expect(api.currencies.latest).toHaveBeenCalled();
    expect(screen.getByText(/0.219731927 PLN/)).toBeInTheDocument();

    fireEvent.change(convertedInputNode, { target: { value: '20' } });
    expect(initialInputNode.value).toBe('91.02');
});

