import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import {
    currencyHistory as currencyHistorySelector,
} from '~/redux/selectors/currenciesSelectors';

import CurrencyChart from '~/components/CurrencyChart/CurrencyChart';

import {
    StyledCurrencyInfo,
    StyledInfoWrapper,
} from './CurrencyInfo.styled';

const CurrencyInfo = ({ isVisible }) => {
    const {
        rates,
        base,
        against,
    } = useSelector(currencyHistorySelector);

    const differenceInTime = isVisible
        ? (rates[0].rate - rates[rates.length - 1].rate).toFixed(4) : 0;

    return isVisible && (
        <StyledCurrencyInfo>
            <CurrencyChart />
            <StyledInfoWrapper>
                {`Course of ${base} in following time  has changed by ${differenceInTime} ${against}`}
            </StyledInfoWrapper>
        </StyledCurrencyInfo>
    );
};

CurrencyInfo.propTypes = {
    isVisible: PropTypes.bool,
};

CurrencyInfo.defaultProps = {
    isVisible: false,
};

export default CurrencyInfo;
