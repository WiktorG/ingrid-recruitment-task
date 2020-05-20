import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithThemeAndReduxProvider } from '~/helpers/testHelpers';

import CurrencyInfo from './CurrencyInfo';

test('component should render', async () => {
    renderWithThemeAndReduxProvider(<CurrencyInfo isVisible />);
    const infoNode = screen.getByTestId('CurrencyInfo');
    expect(infoNode).toBeInTheDocument();
});
