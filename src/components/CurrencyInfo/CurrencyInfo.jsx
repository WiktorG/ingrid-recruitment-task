import React from 'react';
import PropTypes from 'prop-types';

import CurrencyChart from '~/components/CurrencyChart/CurrencyChart';

import {
    StyledCurrencyInfo,
} from './CurrencyInfo.styled';

const CurrencyInfo = ({ children, isInfoVisible }) => {
    return (
        <StyledCurrencyInfo>
            <CurrencyChart />
        </StyledCurrencyInfo>
    );
};

CurrencyInfo.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.object,
    ]),
    isInfoVisible: PropTypes.bool,
};

CurrencyInfo.defaultProps = {
    children: null,
    isInfoVisible: false,
};

export default CurrencyInfo;
