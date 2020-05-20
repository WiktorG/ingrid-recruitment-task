import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { currencyHistoryRequest } from '~/redux/actions/currenciesActions';
import {
    currencyHistory as currencyHistorySelector,
} from '~/redux/selectors/currenciesSelectors';

import CurrencyInfo from '~/components/CurrencyInfo/CurrencyInfo';

import {
    StyledCurrencyHistory,
    StyledTitle,
    StyledForm,
    StyledDatePicker,
    StyledIconHolder,
    StyledArrow,
    StyledInfoWrapper,
    StyledError,
} from './CurrencyHistory.styled';

const CurrencyHistory = () => {
    const dispatch = useDispatch();
    const {
        base,
        against,
        isPending,
        isInfoVisible,
        error,
        ...currencyHistory
    } = useSelector(currencyHistorySelector);
    const [dateFrom, setDateFrom] = useState(currencyHistory.dateFrom);
    const [dateTo, setDateTo] = useState(currencyHistory.dateTo);

    useEffect(() => {
        // Check whether dates in inputs are different
        // than dates in store to prevent unwanted request
        if (
            dateFrom !== ''
            && dateTo !== ''
            && (dateFrom !== currencyHistory.dateFrom || dateTo !== currencyHistory.dateTo)
        ) {
            dispatch(currencyHistoryRequest({
                dateFrom,
                dateTo,
                base,
                against,
            }));
        }
        // eslint-disable-next-line 
    }, [dateFrom, dateTo, base, against, dispatch]);


    return (
        <StyledCurrencyHistory
            customTestId="CurrencyHistory"
        >
            <StyledTitle>
                {`${base} to ${against} history`}
            </StyledTitle>
            <StyledForm>
                <StyledDatePicker
                    placeholder="Date from"
                    value={new Date(dateFrom)}
                    onChange={(date) => setDateFrom(date)}
                    minDate={new Date('1999-01-04')}
                    maxDate={new Date(dateTo) || new Date()}
                />
                <StyledIconHolder>
                    <StyledArrow />
                </StyledIconHolder>
                <StyledDatePicker
                    placeholder="Date to"
                    value={new Date(dateTo)}
                    onChange={(date) => setDateTo(date)}
                    minDate={new Date(dateFrom) || new Date('1999-01-04')}
                />
            </StyledForm>
            {error && (
                <StyledInfoWrapper>
                    <StyledError>
                        {error}
                    </StyledError>
                </StyledInfoWrapper>
            )}
            <CurrencyInfo isVisible={(isInfoVisible && !error)} />
        </StyledCurrencyHistory>
    );
};


export default CurrencyHistory;
