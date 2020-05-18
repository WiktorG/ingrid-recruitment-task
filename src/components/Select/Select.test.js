import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithThemeProvider } from '~/helpers/testHelpers';

import Select from './Select';

test('component should render', async () => {
    renderWithThemeProvider(<Select />);
    const selectNode = screen.getByText('PLN');
    expect(selectNode).toBeInTheDocument();
});

// TODO: Finish this tests
test('component should open menu with items on click', async () => {
    renderWithThemeProvider(<Select />);
    const selectLabel = screen.getByText('PLN');
    await fireEvent.click(selectLabel);
    expect(selectLabel).toBeInTheDocument();
});
