import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithThemeProvider } from '~/helpers/testHelpers';

import Input from './Input';

test('component should render', async () => {
    renderWithThemeProvider(<Input />);
    const inputNode = screen.getByTestId('Input');
    expect(inputNode).toBeInTheDocument();
});
