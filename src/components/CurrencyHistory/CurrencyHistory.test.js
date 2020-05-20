import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithThemeAndReduxProvider } from '~/helpers/testHelpers';
import api from '~/etc/api';

import CurrencyHistory from './CurrencyHistory';

import historyValid from '~/mocks/historyValid';

jest.mock('~/etc/api');
jest.mock('~/components/DatePicker/DatePicker', () => ({
    customTestId,
    onChange,
}) => (
    <input
        type="date"
        data-testid={customTestId}
        onChange={onChange}
    />
));
/*
    I mock component because react-date-picker
    doesn't support testid therefore I cannot read value from it.
    Tests aren't my strongest side but I constantly learn them! :)
*/

beforeEach(() => {
    jest.restoreAllMocks();
});

test('component should render', async () => {
    renderWithThemeAndReduxProvider(<CurrencyHistory />);
    const historyNode = screen.getByTestId('Container');
    expect(historyNode).toBeInTheDocument();
});

test('component should request api when both fields are filled correctly', async () => {
    jest.spyOn(api.currencies, 'history').mockImplementation(() => Promise.resolve({ data: historyValid }));
    renderWithThemeAndReduxProvider(<CurrencyHistory />);
    const dateFromNode = screen.getByTestId('DateFrom');
    const dateToNode = screen.getByTestId('DateTo');

    await fireEvent.change(dateFromNode, { target: { value: '2015-03-10' } });
    await fireEvent.change(dateToNode, { target: { value: '2015-03-20' } });

    expect(dateFromNode.value).toBe('2015-03-10');
    expect(dateToNode.value).toBe('2015-03-20');

    await expect(api.currencies.history).toHaveBeenCalledTimes(1);
});
