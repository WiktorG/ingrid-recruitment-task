import React from 'react';
import { useSelector } from 'react-redux';
import {
    ResponsiveContainer,
    LineChart,
    Tooltip,
    XAxis,
    YAxis,
    Line,
} from 'recharts';
import colors from '~/utilities/colors';

import {
    currencyHistory as currencyHistorySelector,
} from '~/redux/selectors/currenciesSelectors';

import {
    StyledCurrencyChart,
    lineChartMargin,
    yAxisPadding,
} from './CurrencyChart.styled';

const CurrencyChart = () => {
    const { rates } = useSelector(currencyHistorySelector);
    return (
        <StyledCurrencyChart
            data-testid="CurrencyChart"
        >
            <ResponsiveContainer
                width="100%"
                height={150}
            >
                <LineChart
                    data={rates}
                    margin={lineChartMargin}
                >
                    <XAxis dataKey="date" />
                    <YAxis
                        type="number"
                        domain={['auto', 'auto']}
                        dataKey="rate"
                        padding={yAxisPadding}
                    />
                    <Tooltip />
                    <Line
                        type="monotone"
                        dataKey="rate"
                        stroke={colors.green}
                        strokeWidth={3}
                    />
                </LineChart>
            </ResponsiveContainer>
        </StyledCurrencyChart>
    );
};

export default CurrencyChart;
