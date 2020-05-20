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

    // Calculating difference between first and last date
    const [firstDate, lastDate] = [...rates].splice(1, rates.length - 2);
    const differenceInTime = firstDate && lastDate
        ? (firstDate.rate - lastDate.rate).toFixed(4) : 0;

    return isVisible && (
        <StyledCurrencyInfo
            data-testid="CurrencyInfo"
            isVisible={isVisible}
        >
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
