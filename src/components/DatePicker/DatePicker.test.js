import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithThemeAndReduxProvider } from '~/helpers/testHelpers';

import DatePicker from './DatePicker';

test('component should render', async () => {
    renderWithThemeAndReduxProvider(<DatePicker />);
    const datepickerNode = screen.getByTestId('DatePicker');
    expect(datepickerNode).toBeInTheDocument();
});
