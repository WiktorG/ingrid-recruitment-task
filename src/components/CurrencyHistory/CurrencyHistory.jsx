import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isValidDate } from '~/helpers/dateHelpers';

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
    }, [
        dateFrom,
        dateTo,
        base,
        against,
        dispatch,
        currencyHistory.dateFrom,
        currencyHistory.dateTo,
    ]);

    const minDate = isValidDate(dateFrom) ? new Date(dateFrom) : new Date('1999-01-04');
    const maxDate = isValidDate(dateTo) ? new Date(dateTo) : new Date();

    return (
        <StyledCurrencyHistory
            customTestId="CurrencyHistory"
        >
            <StyledTitle>
                {`${base} to ${against} history`}
            </StyledTitle>
            <StyledForm>
                <StyledDatePicker
                    customTestId="DateFrom"
                    placeholder="Date from"
                    value={new Date(dateFrom)}
                    onChange={(date) => setDateFrom(date)}
                    minDate={new Date('1999-01-04')}
                    maxDate={maxDate}
                />
                <StyledIconHolder>
                    <StyledArrow />
                </StyledIconHolder>
                <StyledDatePicker
                    customTestId="DateTo"
                    placeholder="Date to"
                    value={new Date(dateTo)}
                    onChange={(date) => setDateTo(date)}
                    minDate={minDate}
                    maxDate={new Date()}
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
