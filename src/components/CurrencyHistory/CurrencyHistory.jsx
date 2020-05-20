import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import dateHelper from '~/helpers/dateHelper';

import { currencyHistoryRequest } from '~/redux/actions/currenciesActions';
import {
    currencyHistory as currencyHistorySelector,
} from '~/redux/selectors/currenciesSelectors';

import CurrencyGraph from '~/components/CurrencyGraph/CurrencyGraph';

import {
    StyledCurrencyHistory,
    StyledTitle,
    StyledForm,
    StyledDatePicker,
    StyledIconHolder,
    StyledArrow,
} from './CurrencyHistory.styled';

const CurrencyHistory = () => {
    const dispatch = useDispatch();
    const { base, against, isPending, isGraphVisible, ...currencyHistory } = useSelector(currencyHistorySelector);
    const [dateFrom, setDateFrom] = useState(undefined);
    const [dateTo, setDateTo] = useState(undefined);

    useEffect(() => {
        if (
            dateFrom !== undefined
            && dateTo !== undefined
            && dateFrom !== currencyHistory.dateFrom
            && dateTo !== currencyHistory.dateTo
        ) {
            dispatch(currencyHistoryRequest({
                dateFrom: dateHelper(dateFrom),
                dateTo: dateHelper(dateTo),
                base,
                against,
            }));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dateFrom, dateTo, base, against, dispatch]);

    // TODO: Prevent from selecting the same day (horizontal graph)

    return (
        <StyledCurrencyHistory
            customTestId="CurrencyHistory"
        >
            <StyledTitle>Currency History</StyledTitle>
            <StyledForm>
                <StyledDatePicker
                    placeholder="Date from"
                    value={dateFrom}
                    onChange={(date) => setDateFrom(date)}
                    minDate={new Date('1999-01-04')}
                    maxDate={dateTo || new Date()}
                />
                <StyledIconHolder>
                    <StyledArrow />
                </StyledIconHolder>
                <StyledDatePicker
                    placeholder="Date to"
                    value={dateTo}
                    onChange={(date) => setDateTo(date)}
                    minDate={dateFrom || new Date('1999-01-04')}
                />
            </StyledForm>
            {(isGraphVisible) && <CurrencyGraph />}
        </StyledCurrencyHistory>
    );
};


export default CurrencyHistory;
