import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithThemeAndReduxProvider } from '~/helpers/testHelpers';

import CurrencyHistory from './CurrencyHistory';

test('component should render', async () => {
    renderWithThemeAndReduxProvider(<CurrencyHistory />);
    const historyNode = screen.getByTestId('CurrencyHistory');
    expect(historyNode).toBeInTheDocument();
});
