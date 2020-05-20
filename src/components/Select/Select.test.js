import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithThemeProvider } from '~/helpers/testHelpers';

import Select from './Select';

test('component should render', async () => {
    renderWithThemeProvider(<Select
        options={[{
            value: 'PLN',
            label: 'PLN',
        }]}
    />);
    const selectNode = screen.getByText(/PLN/);
    expect(selectNode).toBeInTheDocument();
});
