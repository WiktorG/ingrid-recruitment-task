import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import dateHelper from '~/helpers/dateHelper';

import { currencyHistoryRequest } from '~/redux/actions/currenciesActions';
import {
    currencyTimeline as currencyTimelineSelector,
} from '~/redux/selectors/currenciesSelectors';

import {
    StyledCurrencyTimeline,
    StyledTitle,
    StyledForm,
    StyledDatePicker,
    StyledIconHolder,
    StyledArrow,
} from './CurrencyTimeline.styled';

const CurrencyUpdate = () => {
    const dispatch = useDispatch();
    const { base, against, ...currencyTimeline } = useSelector(currencyTimelineSelector);
    const [dateFrom, setDateFrom] = useState(undefined);
    const [dateTo, setDateTo] = useState(undefined);

    useEffect(() => {
        if (
            dateFrom !== undefined
            && dateTo !== undefined
            && dateFrom !== currencyTimeline.dateFrom
            && dateTo !== currencyTimeline.dateTo
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

    return (
        <StyledCurrencyTimeline>
            <StyledTitle>Currency timeline</StyledTitle>
            <StyledForm>
                <StyledDatePicker
                    placeholder="Date from"
                    value={dateFrom}
                    onChange={(date) => setDateFrom(date)}
                />
                <StyledIconHolder>
                    <StyledArrow />
                </StyledIconHolder>
                <StyledDatePicker
                    placeholder="Date to"
                    value={dateTo}
                    onChange={(date) => setDateTo(date)}
                />
            </StyledForm>
        </StyledCurrencyTimeline>
    );
};


export default CurrencyUpdate;
