import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithThemeProvider } from '~/helpers/testHelpers';

import Container from './Container';

test('component should render', async () => {
    renderWithThemeProvider(<Container />);
    const containerNode = screen.getByTestId('Container');
    expect(containerNode).toBeInTheDocument();
});
