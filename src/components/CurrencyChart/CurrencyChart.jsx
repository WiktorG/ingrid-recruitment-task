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
                    margin={{
                        right: 30,
                        left: 30,
                        top: 5,
                        bottom: 5,
                    }}
                >
                    <XAxis dataKey="date" />
                    <YAxis
                        type="number"
                        domain={['auto', 'auto']}
                        dataKey="rate"
                        padding={{
                            top: 5,
                            bottom: 5,
                        }}
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