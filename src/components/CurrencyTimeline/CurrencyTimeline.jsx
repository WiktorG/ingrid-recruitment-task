import React, { useState, useEffect } from 'react';

import dateHelper from '~/helpers/dateHelper';

import {
    StyledCurrencyTimeline,
    StyledTitle,
    StyledForm,
    StyledDatePicker,
    StyledIconHolder,
    StyledArrow,
} from './CurrencyTimeline.styled';

const CurrencyUpdate = () => {
    const [dateFrom, setDateFrom] = useState(undefined);
    const [dateTo, setDateTo] = useState(undefined);

    useEffect(() => {
        if (dateFrom !== undefined && dateTo !== undefined) {
            console.log(dateHelper(dateFrom), dateHelper(dateTo));
        }
    }, [dateFrom, dateTo]);

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
}


export default CurrencyUpdate;
