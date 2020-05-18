import React from 'react';

import {
    StyledFooter,
    StyledLink,
    StyledCaption,
} from './Footer.styled';

const Footer = () => (
    <StyledFooter>
        <StyledLink href="https://www.ingrid.com">
            ingrid.com
        </StyledLink>
        <StyledCaption>
            front-end coding assignment
        </StyledCaption>
    </StyledFooter>
);

export default Footer;
