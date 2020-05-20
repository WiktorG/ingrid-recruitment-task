import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isValidDate } from '~/helpers/dateHelpers';

import {
    setHistoryDateFrom,
    setHistoryDateTo,
    currencyHistoryRequest,
} from '~/redux/actions/currenciesActions';
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
        isInfoVisible,
        error,
        dateFrom,
        dateTo,
    } = useSelector(currencyHistorySelector);

    useEffect(() => {
        if (dateFrom !== '' && dateTo !== '') {
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
    ]);

    const minDate = isValidDate(dateFrom) ? new Date(dateFrom) : new Date('1999-01-04');
    const maxDate = isValidDate(dateTo) ? new Date(dateTo) : new Date();

    return (
        <StyledCurrencyHistory>
            <StyledTitle>
                {`${base} to ${against} history`}
            </StyledTitle>
            <StyledForm>
                <StyledDatePicker
                    customTestId="DateFrom"
                    placeholder="Date from"
                    value={dateFrom}
                    onChange={(date) => dispatch(setHistoryDateFrom(date))}
                    minDate={new Date('1999-01-04')}
                    maxDate={maxDate}
                />
                <StyledIconHolder>
                    <StyledArrow />
                </StyledIconHolder>
                <StyledDatePicker
                    customTestId="DateTo"
                    placeholder="Date to"
                    value={dateTo}
                    onChange={(date) => dispatch(setHistoryDateTo(date))}
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
