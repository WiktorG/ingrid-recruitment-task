import React from 'react';
import PropTypes from 'prop-types';

import {
    StyledContainer,
} from './Container.styled';

const Container = ({ children, className, customTestId }) => (
    <StyledContainer
        data-testid={customTestId}
        className={className}
    >
        {children}
    </StyledContainer>
);

Container.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.object,
    ]),
    className: PropTypes.string,
    customTestId: PropTypes.string,
};

Container.defaultProps = {
    children: null,
    className: '',
    customTestId: 'Container',
};

export default Container;
