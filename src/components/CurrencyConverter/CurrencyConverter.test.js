import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
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
    const converterNode = screen.getByTestId('Container');
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

test('component should show error when server rejects request', async () => {
    jest.spyOn(api.currencies, 'latest').mockImplementation(() => Promise.reject());
    renderWithThemeAndReduxProvider(<CurrencyConverter />);

    await expect(api.currencies.latest).toHaveBeenCalled();
    expect(screen.getByText(/Something went wrong - try again later/)).toBeInTheDocument();
});

test('component should show error when user inputs incorrect data', async () => {
    jest.spyOn(api.currencies, 'latest').mockImplementation(() => Promise.resolve({ data: currencyValid }));
    renderWithThemeAndReduxProvider(<CurrencyConverter />);

    await expect(api.currencies.latest).toHaveBeenCalled();
    expect(screen.getByText(/0.219731927 PLN/)).toBeInTheDocument();

    const initialInputNode = screen.getByTestId('InitialInput');
    await initialInputNode.setAttribute('type', 'text');

    await fireEvent.change(initialInputNode, { target: { value: '2dad0' } });

    expect(screen.getByText(/Incorrect data in fields./)).toBeInTheDocument();
});
