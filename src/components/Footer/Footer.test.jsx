import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithThemeProvider } from '~/helpers/testHelpers';

import Footer from './Footer';

test('component should render', async () => {
    renderWithThemeProvider(<Footer />);
    const linkNode = screen.getByText(/ingrid.com/i);
    const captionNode = screen.getByText(/ingrid.com/i);
    expect(linkNode).toBeInTheDocument();
    expect(captionNode).toBeInTheDocument();
});
