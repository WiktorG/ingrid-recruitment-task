import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    XYPlot,
    Xaxis,
    Yaxis,
    LineSeries,
} from 'react-vis';

import {
    currencyHistory as currencyHistorySelector,
} from '~/redux/selectors/currenciesSelectors';

import {
    StyledCurrencyGraph,
} from './CurrencyGraph.styled';

const CurrencyGraph = () => {
    const { rates } = useSelector(currencyHistorySelector);
    return (
        <StyledCurrencyGraph>
            
        </StyledCurrencyGraph>
    );
};

export default CurrencyGraph;

