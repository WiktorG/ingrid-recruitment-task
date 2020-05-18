import React from 'react';
import PropTypes from 'prop-types';

import {
    StyledContainer,
} from './Container.styled';

const Container = ({ children, className }) => (
    <StyledContainer className={className}>
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
};

Container.defaultProps = {
    children: null,
    className: '',
};

export default Container;
